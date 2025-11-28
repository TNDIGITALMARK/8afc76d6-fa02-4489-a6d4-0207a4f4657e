import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDYyOTgwOCwiZXhwIjoyMDc2MjA1ODA4fQ.cLBPSf0hIgpvUgc-9C8-w9vqOgMcqq-h8TnC93K5YzA'
);

async function createChatTables() {
  console.log('Creating chat tables...\n');

  // Create conversations table
  const conversationsSQL = `
    create table if not exists public.conversations (
      id uuid primary key default uuid_generate_v4(),
      tenantid text not null,
      projectid uuid not null,
      title text not null default 'New Conversation',
      created_at timestamptz default now(),
      updated_at timestamptz default now(),
      last_message_at timestamptz default now()
    );
  `;

  const { error: convTableError } = await supabase.rpc('exec_sql', { sql: conversationsSQL });

  if (convTableError) {
    console.error('❌ Error creating conversations table:', convTableError.message);
  } else {
    console.log('✅ Conversations table created');
  }

  // Create messages table
  const messagesSQL = `
    create table if not exists public.messages (
      id uuid primary key default uuid_generate_v4(),
      tenantid text not null,
      projectid uuid not null,
      conversation_id uuid not null,
      role text not null check (role in ('user', 'assistant', 'system')),
      content text not null,
      created_at timestamptz default now()
    );
  `;

  const { error: msgTableError } = await supabase.rpc('exec_sql', { sql: messagesSQL });

  if (msgTableError) {
    console.error('❌ Error creating messages table:', msgTableError.message);
  } else {
    console.log('✅ Messages table created');
  }

  console.log('\nTables created successfully!');
}

createChatTables().catch(console.error);
