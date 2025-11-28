import { getContactSubmissions } from '@/lib/supabase/contact';
import { formatDistanceToNow } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function AdminContactsPage() {
  let submissions = [];
  let error = null;

  try {
    submissions = await getContactSubmissions();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error fetching submissions:', err);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Contact Submissions
          </h1>
          <p className="text-gray-600">
            Manage and view all contact form submissions from NeuraNova landing page
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-red-800 font-semibold mb-1">Database Not Set Up</h3>
                <p className="text-red-700 mb-3">{error}</p>
                <p className="text-red-600 text-sm">
                  The <code>contact_submissions</code> table hasn't been created yet.
                  Please follow the setup instructions in <code>CONTACT_FORM_BACKEND_SETUP.md</code>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        {!error && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-1">Total</div>
              <div className="text-3xl font-bold text-gray-900">{submissions.length}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-1">New</div>
              <div className="text-3xl font-bold text-blue-600">
                {submissions.filter(s => s.status === 'new').length}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-1">Read</div>
              <div className="text-3xl font-bold text-purple-600">
                {submissions.filter(s => s.status === 'read').length}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-1">Replied</div>
              <div className="text-3xl font-bold text-green-600">
                {submissions.filter(s => s.status === 'replied').length}
              </div>
            </div>
          </div>
        )}

        {/* Submissions Table */}
        {!error && submissions.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Submissions Yet</h3>
            <p className="text-gray-600">
              Contact form submissions will appear here once users start reaching out.
            </p>
          </div>
        )}

        {!error && submissions.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{submission.name}</div>
                        <div className="text-sm text-gray-600">{submission.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {submission.country || <span className="text-gray-400">Not provided</span>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700 max-w-md">
                          {submission.message.length > 100
                            ? `${submission.message.substring(0, 100)}...`
                            : submission.message}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                            submission.status === 'new'
                              ? 'bg-blue-100 text-blue-700'
                              : submission.status === 'read'
                              ? 'bg-purple-100 text-purple-700'
                              : submission.status === 'replied'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Landing Page
          </a>
        </div>
      </div>
    </div>
  );
}
