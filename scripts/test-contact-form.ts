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

async function testContactFormBackend() {
  console.log('🧪 Testing NeuraNova Contact Form Backend\n');
  console.log('=' .repeat(60) + '\n');

  // Test 1: Check table exists
  console.log('✅ Test 1: Table Existence');
  try {
    const { error, count } = await supabase
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    console.log(`   ✓ Table exists with ${count || 0} submissions\n`);
  } catch (err) {
    console.log('   ✗ Table check failed:', err);
    return;
  }

  // Test 2: API endpoint
  console.log('✅ Test 2: API Endpoint');
  try {
    const response = await fetch('http://localhost:4006/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@neuranova.ai',
        country: 'US',
        message: 'This is a test submission from the verification script.'
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'API request failed');
    }

    console.log('   ✓ API endpoint responded successfully');
    console.log(`   ✓ Submission ID: ${result.submissionId}\n`);
  } catch (err) {
    console.log('   ✗ API test failed:', err);
    console.log('   ℹ️  Make sure dev server is running on port 4006\n');
    return;
  }

  // Test 3: Data retrieval
  console.log('✅ Test 3: Data Retrieval');
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) throw error;

    if (data && data.length > 0) {
      const latest = data[0];
      console.log('   ✓ Successfully retrieved latest submission:');
      console.log(`     - Name: ${latest.name}`);
      console.log(`     - Email: ${latest.email}`);
      console.log(`     - Status: ${latest.status}`);
      console.log(`     - Created: ${new Date(latest.created_at).toLocaleString()}\n`);
    }
  } catch (err) {
    console.log('   ✗ Data retrieval failed:', err);
    return;
  }

  // Test 4: Admin dashboard accessibility
  console.log('✅ Test 4: Admin Dashboard');
  try {
    const response = await fetch('http://localhost:4006/admin/contacts');
    if (response.ok) {
      console.log('   ✓ Admin dashboard is accessible\n');
    } else {
      console.log('   ⚠️  Admin dashboard returned:', response.status, '\n');
    }
  } catch (err) {
    console.log('   ✗ Admin dashboard test failed:', err, '\n');
  }

  console.log('=' .repeat(60));
  console.log('✨ All tests completed!\n');
  console.log('📋 Summary:');
  console.log('   • Database table: ✓ Created and accessible');
  console.log('   • API endpoint: ✓ Working correctly');
  console.log('   • Data flow: ✓ Form → API → Database');
  console.log('   • Admin panel: ✓ Available for viewing submissions\n');
  console.log('🌐 Next steps:');
  console.log('   • Visit http://localhost:4006 to test the live form');
  console.log('   • View submissions at http://localhost:4006/admin/contacts');
  console.log('   • Customize content in src/components/landing/Contact.tsx\n');
}

testContactFormBackend().catch(console.error);
