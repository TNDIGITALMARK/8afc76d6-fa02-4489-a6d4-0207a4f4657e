import { supabase, TENANT_ID, PROJECT_ID } from './client';

export interface Conversation {
  id: string;
  tenantid: string;
  projectid: string;
  title: string;
  created_at: string;
  updated_at: string;
  last_message_at: string;
}

export interface Message {
  id: string;
  tenantid: string;
  projectid: string;
  conversation_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  created_at: string;
}

// Get all conversations
export async function getConversations(): Promise<Conversation[]> {
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .order('last_message_at', { ascending: false });

  if (error) {
    console.error('Error fetching conversations:', error);
    return [];
  }

  return data as Conversation[];
}

// Get messages for a conversation
export async function getMessages(conversationId: string): Promise<Message[]> {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching messages:', error);
    return [];
  }

  return data as Message[];
}

// Create a new conversation
export async function createConversation(title: string = 'New Conversation'): Promise<Conversation | null> {
  const { data, error } = await supabase
    .from('conversations')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      title,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating conversation:', error);
    return null;
  }

  return data as Conversation;
}

// Send a message
export async function sendMessage(
  conversationId: string,
  content: string,
  role: 'user' | 'assistant' = 'user'
): Promise<Message | null> {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      conversation_id: conversationId,
      role,
      content,
    })
    .select()
    .single();

  if (error) {
    console.error('Error sending message:', error);
    return null;
  }

  // Update conversation's last_message_at
  await supabase
    .from('conversations')
    .update({ last_message_at: new Date().toISOString() })
    .eq('id', conversationId);

  return data as Message;
}

// Delete a conversation
export async function deleteConversation(conversationId: string): Promise<boolean> {
  const { error } = await supabase
    .from('conversations')
    .delete()
    .eq('id', conversationId);

  if (error) {
    console.error('Error deleting conversation:', error);
    return false;
  }

  return true;
}

// Update conversation title
export async function updateConversationTitle(
  conversationId: string,
  title: string
): Promise<boolean> {
  const { error } = await supabase
    .from('conversations')
    .update({ title, updated_at: new Date().toISOString() })
    .eq('id', conversationId);

  if (error) {
    console.error('Error updating conversation:', error);
    return false;
  }

  return true;
}

// Subscribe to new messages in a conversation
export function subscribeToMessages(
  conversationId: string,
  callback: (message: Message) => void
) {
  const channel = supabase
    .channel(`messages-${conversationId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `conversation_id=eq.${conversationId}`,
      },
      (payload) => {
        callback(payload.new as Message);
      }
    )
    .subscribe();

  return channel;
}
