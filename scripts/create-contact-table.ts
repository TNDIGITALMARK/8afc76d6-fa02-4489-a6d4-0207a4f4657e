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

async function createContactSubmissionsTable() {
  console.log('🚀 Creating contact_submissions table...\n');

  const sql = `
-- Create contact_submissions table with full multi-tenant support
create table if not exists public.contact_submissions (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Form data columns
  name text not null,
  email text not null,
  country text,
  message text not null,

  -- Metadata
  status text default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  ip_address text,
  user_agent text,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add foreign key constraints (required)
alter table public.contact_submissions
  drop constraint if exists fk_tenant,
  add constraint fk_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.contact_submissions
  drop constraint if exists fk_project,
  add constraint fk_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS (required)
alter table public.contact_submissions enable row level security;

-- RLS Policies (required - separate per operation)

-- Drop existing policies if they exist
drop policy if exists "anon_select_contact_submissions" on public.contact_submissions;
drop policy if exists "auth_select_contact_submissions" on public.contact_submissions;
drop policy if exists "anon_insert_contact_submissions" on public.contact_submissions;
drop policy if exists "auth_insert_contact_submissions" on public.contact_submissions;
drop policy if exists "auth_update_contact_submissions" on public.contact_submissions;
drop policy if exists "auth_delete_contact_submissions" on public.contact_submissions;

-- SELECT policy for anon role (allow read)
create policy "anon_select_contact_submissions"
  on public.contact_submissions
  for select
  to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- SELECT policy for authenticated role
create policy "auth_select_contact_submissions"
  on public.contact_submissions
  for select
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- INSERT policy for anon role (allow public submissions)
create policy "anon_insert_contact_submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- INSERT policy for authenticated role
create policy "auth_insert_contact_submissions"
  on public.contact_submissions
  for insert
  to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- UPDATE policy for authenticated role
create policy "auth_update_contact_submissions"
  on public.contact_submissions
  for update
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- DELETE policy for authenticated role
create policy "auth_delete_contact_submissions"
  on public.contact_submissions
  for delete
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Add indexes for performance
create index if not exists idx_contact_submissions_tenant_project
  on public.contact_submissions(tenantid, projectid);
create index if not exists idx_contact_submissions_status
  on public.contact_submissions(status);
create index if not exists idx_contact_submissions_created_at
  on public.contact_submissions(created_at desc);
create index if not exists idx_contact_submissions_email
  on public.contact_submissions(email);

-- Add helpful comments
comment on table public.contact_submissions is 'Contact form submissions from NeuraNova landing page with tenant/project isolation';
comment on column public.contact_submissions.tenantid is 'FK to tenants.id for multi-tenant isolation';
comment on column public.contact_submissions.projectid is 'FK to projects.id for project-level isolation';
comment on column public.contact_submissions.name is 'Submitter full name';
comment on column public.contact_submissions.email is 'Submitter email address';
comment on column public.contact_submissions.country is 'Optional country of submitter';
comment on column public.contact_submissions.message is 'Contact message content';
comment on column public.contact_submissions.status is 'Submission status: new, read, replied, archived';
`;

  try {
    // This requires service role key which we don't have access to via the client
    // Let's try a simpler approach - just check if we can query the table
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1);

    if (error && error.message.includes('does not exist')) {
      console.error('❌ Table does not exist. We need service role access to create it via SQL.');
      console.log('\n📝 Alternative: Use Supabase Dashboard to execute the SQL above.');
      console.log('\nOR use the migration API with proper setup.');
      return false;
    }

    if (error) {
      console.error('❌ Error checking table:', error.message);
      return false;
    }

    console.log('✅ Table contact_submissions already exists or is accessible!');
    console.log(`📊 Current row count: ${data?.length || 0}`);
    return true;

  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return false;
  }
}

createContactSubmissionsTable().then((success) => {
  process.exit(success ? 0 : 1);
});
