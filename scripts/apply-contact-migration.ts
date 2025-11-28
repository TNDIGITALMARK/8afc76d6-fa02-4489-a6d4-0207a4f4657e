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

async function checkTable() {
  console.log('🔍 Checking if contact_submissions table exists...\n');

  try {
    // Try to query the table - if it exists, this will work
    const { data, error, count } = await supabase
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true });

    if (error) {
      // Check if error is because table doesn't exist
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        console.log('❌ Table contact_submissions does NOT exist yet\n');
        console.log('📋 Next steps:');
        console.log('1. Go to Supabase Dashboard: https://supabase.com/dashboard/project/hfndfmtxhqvubnfiwzlz');
        console.log('2. Navigate to: SQL Editor');
        console.log('3. Copy the SQL from: /app/temp/8afc76d6-fa02-4489-a6d4-0207a4f4657e/supabase/migrations/20251128060905_create_contact_submissions_table.sql');
        console.log('4. Paste and run the SQL');
        console.log('5. Verify in Table Editor that "contact_submissions" table appears\n');
        return false;
      }

      throw error;
    }

    console.log('✅ Table contact_submissions EXISTS!\n');
    console.log(`📊 Current row count: ${count || 0}\n`);

    // Show sample data if any exists
    if (count && count > 0) {
      const { data: samples } = await supabase
        .from('contact_submissions')
        .select('*')
        .limit(5);

      console.log('Recent submissions:');
      samples?.forEach((sub, i) => {
        console.log(`  ${i + 1}. ${sub.name} (${sub.email}) - Status: ${sub.status}`);
      });
      console.log('');
    }

    return true;
  } catch (err) {
    console.error('❌ Error:', err);
    return false;
  }
}

// Run the check
checkTable().then(exists => {
  if (exists) {
    console.log('✨ Contact form backend is ready to use!');
    console.log('🌐 Test the form at: http://localhost:4006');
    console.log('📊 View submissions at: http://localhost:4006/admin/contacts');
  } else {
    console.log('⚠️ Setup required - follow the steps above');
  }
  process.exit(exists ? 0 : 1);
});
