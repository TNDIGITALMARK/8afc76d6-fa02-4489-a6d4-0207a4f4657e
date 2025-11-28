import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IjliUGtsODJCMjBNQUtleEJEa2lzWWd3MDhYSTMiLCJwcm9qZWN0X2lkIjoiOGFmYzc2ZDYtZmEwMi00NDg5LWE2ZDQtMDIwN2E0ZjQ2NTdlIiwianRpIjoiZTgzNjAyNDUtNzQ3Mi00NjUyLTg4MGItNGIwN2U5MDA1MmI2IiwiaWF0IjoxNzY0MzA4NTkwLCJleHAiOjE3NjQzMTEyOTB9.e4dQpuQIFXEsoHIAUmOd3tKefWU1Uac_vts5ehrZOLI`
      }
    }
  }
);

async function checkSchema() {
  console.log('=== DATABASE SCHEMA EXPLORATION ===\n');

  // Check for common table names
  const tablesToCheck = ['conversations', 'messages', 'chats', 'chat_messages', 'users'];

  for (const tableName of tablesToCheck) {
    const { error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });

    if (!error) {
      console.log(`✅ ${tableName}: exists (${count} rows)`);
    } else if (error.message?.includes('does not exist')) {
      console.log(`❌ ${tableName}: does not exist`);
    } else {
      console.log(`❌ ${tableName}: error - ${error.message}`);
    }
  }
}

checkSchema().catch(console.error);
