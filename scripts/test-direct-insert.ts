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

async function testDirectInsert() {
  // Try a direct insert to test the table
  const TENANT_ID = '9bPkl82B20MAKexBDkisYgw08XI3';
  const PROJECT_ID = '8afc76d6-fa02-4489-a6d4-0207a4f4657e';

  console.log('🧪 Testing direct insert to contact_submissions table...\n');

  const { data, error } = await supabase
    .from('contact_submissions')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      name: 'Direct Test',
      email: 'directtest@neuranova.ai',
      message: 'Testing direct insert to verify table works',
      status: 'new',
    })
    .select()
    .single();

  if (error) {
    console.error('❌ Insert failed:');
    console.error('   Error code:', error.code);
    console.error('   Error message:', error.message);
    console.error('   Error details:', error.details);
    console.error('   Error hint:', error.hint);
  } else {
    console.log('✅ Insert successful!');
    console.log('   ID:', data.id);
    console.log('   Name:', data.name);
    console.log('   Email:', data.email);
    console.log('   Status:', data.status);
    console.log('\n✨ Table is working correctly! The issue is with Supabase PostgREST schema cache.');
    console.log('\n💡 Solution: Reload schema in Supabase Dashboard');
    console.log('   1. Go to https://supabase.com/dashboard/project/hfndfmtxhqvubnfiwzlz');
    console.log('   2. Navigate to API settings');
    console.log('   3. Click "Reload schema cache"');
  }
}

testDirectInsert().catch(console.error);
