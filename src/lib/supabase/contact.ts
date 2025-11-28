import { supabase } from './client';

export interface ContactSubmission {
  id: string;
  tenantid: string;
  projectid: string;
  name: string;
  email: string;
  country: string | null;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateContactSubmissionInput {
  name: string;
  email: string;
  country?: string;
  message: string;
  ip_address?: string;
  user_agent?: string;
}

const TENANT_ID = '9bPkl82B20MAKexBDkisYgw08XI3';
const PROJECT_ID = '8afc76d6-fa02-4489-a6d4-0207a4f4657e';

/**
 * Create a new contact form submission
 */
export async function createContactSubmission(
  input: CreateContactSubmissionInput
): Promise<ContactSubmission> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      name: input.name,
      email: input.email,
      country: input.country || null,
      message: input.message,
      ip_address: input.ip_address || null,
      user_agent: input.user_agent || null,
      status: 'new',
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating contact submission:', error);
    throw new Error(error.message);
  }

  return data as ContactSubmission;
}

/**
 * Get all contact submissions (admin function)
 */
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching contact submissions:', error);
    throw new Error(error.message);
  }

  return data as ContactSubmission[];
}

/**
 * Get contact submissions by status
 */
export async function getContactSubmissionsByStatus(
  status: 'new' | 'read' | 'replied' | 'archived'
): Promise<ContactSubmission[]> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching contact submissions by status:', error);
    throw new Error(error.message);
  }

  return data as ContactSubmission[];
}

/**
 * Update contact submission status
 */
export async function updateContactSubmissionStatus(
  id: string,
  status: 'new' | 'read' | 'replied' | 'archived'
): Promise<ContactSubmission> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating contact submission status:', error);
    throw new Error(error.message);
  }

  return data as ContactSubmission;
}

/**
 * Delete a contact submission
 */
export async function deleteContactSubmission(id: string): Promise<void> {
  const { error } = await supabase
    .from('contact_submissions')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting contact submission:', error);
    throw new Error(error.message);
  }
}

/**
 * Get contact submission count by status
 */
export async function getContactSubmissionCounts(): Promise<{
  new: number;
  read: number;
  replied: number;
  archived: number;
  total: number;
}> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('status');

  if (error) {
    console.error('Error fetching contact submission counts:', error);
    throw new Error(error.message);
  }

  const counts = {
    new: 0,
    read: 0,
    replied: 0,
    archived: 0,
    total: data?.length || 0,
  };

  data?.forEach((submission) => {
    if (submission.status in counts) {
      counts[submission.status as keyof typeof counts]++;
    }
  });

  return counts;
}
