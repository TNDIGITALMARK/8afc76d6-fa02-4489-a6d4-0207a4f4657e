'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import {
  getConversations,
  getMessages,
  createConversation,
  sendMessage,
  deleteConversation,
  updateConversationTitle,
  subscribeToMessages,
  type Conversation,
  type Message,
} from '@/lib/supabase/chat';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load conversations on mount
  useEffect(() => {
    loadConversations();
  }, []);

  // Subscribe to new messages
  useEffect(() => {
    if (!currentConversation) return;

    const channel = subscribeToMessages(currentConversation.id, (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
      scrollToBottom();
    });

    return () => {
      channel.unsubscribe();
    };
  }, [currentConversation?.id]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadConversations = async () => {
    try {
      const convs = await getConversations();
      setConversations(convs);

      // Select first conversation if available
      if (convs.length > 0 && !currentConversation) {
        await selectConversation(convs[0].id);
      }
    } catch (error) {
      console.error('Error loading conversations:', error);
      toast({
        title: 'Error',
        description: 'Failed to load conversations',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const selectConversation = async (id: string) => {
    try {
      const conv = conversations.find((c) => c.id === id);
      if (conv) {
        setCurrentConversation(conv);
        const msgs = await getMessages(id);
        setMessages(msgs);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
      toast({
        title: 'Error',
        description: 'Failed to load messages',
        variant: 'destructive',
      });
    }
  };

  const handleNewChat = async () => {
    try {
      const conv = await createConversation();
      if (conv) {
        setConversations((prev) => [conv, ...prev]);
        setCurrentConversation(conv);
        setMessages([]);

        toast({
          title: 'New conversation',
          description: 'Started a new chat',
        });
      }
    } catch (error) {
      console.error('Error creating conversation:', error);
      toast({
        title: 'Error',
        description: 'Failed to create conversation',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteConversation = async (id: string) => {
    try {
      const success = await deleteConversation(id);
      if (success) {
        setConversations((prev) => prev.filter((c) => c.id !== id));

        if (currentConversation?.id === id) {
          setCurrentConversation(null);
          setMessages([]);
        }

        toast({
          title: 'Conversation deleted',
          description: 'The conversation has been removed',
        });
      }
    } catch (error) {
      console.error('Error deleting conversation:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete conversation',
        variant: 'destructive',
      });
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!currentConversation) {
      // Create a new conversation if none exists
      const conv = await createConversation();
      if (!conv) return;

      setConversations((prev) => [conv, ...prev]);
      setCurrentConversation(conv);
    }

    const convId = currentConversation?.id || '';

    try {
      setSending(true);

      // Send user message
      const userMsg = await sendMessage(convId, content, 'user');
      if (userMsg) {
        setMessages((prev) => [...prev, userMsg]);

        // Update conversation title based on first message
        if (messages.length === 0) {
          const title = content.slice(0, 50) + (content.length > 50 ? '...' : '');
          await updateConversationTitle(convId, title);
          setConversations((prev) =>
            prev.map((c) => (c.id === convId ? { ...c, title } : c))
          );
        }

        // Generate AI response
        await generateAIResponse(convId, content);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  const generateAIResponse = async (conversationId: string, userMessage: string) => {
    try {
      // Call the AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages.slice(-10), // Send last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate AI response');
      }

      const data = await response.json();

      const aiMsg = await sendMessage(conversationId, data.response, 'assistant');
      if (aiMsg) {
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch (error) {
      console.error('Error generating AI response:', error);

      // Fallback response if API fails
      const fallbackMsg = await sendMessage(
        conversationId,
        "I apologize, but I'm having trouble processing that right now. Please try again in a moment! 💙",
        'assistant'
      );
      if (fallbackMsg) {
        setMessages((prev) => [...prev, fallbackMsg]);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar
        conversations={conversations}
        currentConversationId={currentConversation?.id}
        onNewChat={handleNewChat}
        onSelectConversation={selectConversation}
        onDeleteConversation={handleDeleteConversation}
      />

      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="border-b border-border bg-card/30 backdrop-blur-sm p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  {currentConversation?.title || 'NeuraNova'}
                </h1>
                <p className="text-xs text-muted-foreground">
                  Your lovable AI companion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  Welcome to NeuraNova
                </h2>
                <p className="text-muted-foreground max-w-md">
                  I'm your lovable AI companion, here to chat, help you plan, and create
                  stories together. How can I assist you today?
                </p>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <ChatInput onSend={handleSendMessage} disabled={sending} />
      </div>
    </div>
  );
}
