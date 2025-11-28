import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - NeuraNova',
  description: 'Terms of Service for NeuraNova AI Companion. Read our terms and conditions for using our service.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'November 28, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--color-neuranova-bg-start))] to-[hsl(var(--color-neuranova-bg-end))]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[hsl(var(--color-neuranova-border))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[hsl(var(--color-neuranova-text-secondary))] hover:text-[hsl(var(--color-neuranova-primary))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-[hsl(var(--color-neuranova-text-secondary))]">
            Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              Welcome to NeuraNova. By accessing or using our AI companion service, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and NeuraNova.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              2. Definitions
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              For the purposes of these Terms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li><strong>&quot;Service&quot;</strong> refers to the NeuraNova AI companion platform, including all features, content, and functionality</li>
              <li><strong>&quot;User&quot;</strong>, &quot;you&quot;, or &quot;your&quot; refers to any individual or entity accessing or using the Service</li>
              <li><strong>&quot;We&quot;</strong>, &quot;us&quot;, or &quot;our&quot; refers to NeuraNova and its affiliates</li>
              <li><strong>&quot;Content&quot;</strong> refers to all text, data, images, audio, video, and other materials</li>
              <li><strong>&quot;Account&quot;</strong> refers to your registered user account on the Service</li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              3. Eligibility
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              To use our Service, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>Be at least 13 years of age (or the minimum age required in your jurisdiction)</li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
            </ul>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mt-3">
              Users under 18 must have parental or guardian consent. By using the Service, you represent that you meet these eligibility requirements.
            </p>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              4. Account Registration and Security
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Immediately notify us of any unauthorized access or security breaches</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Use only one account per person (no duplicate accounts)</li>
            </ul>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mt-3">
              You are solely responsible for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              5. Acceptable Use Policy
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              You agree NOT to use the Service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Harass, abuse, threaten, or intimidate others</li>
              <li>Post or transmit illegal, harmful, threatening, abusive, defamatory, or obscene content</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Interfere with or disrupt the Service or servers/networks connected to the Service</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Use automated systems (bots, scrapers, etc.) without our written permission</li>
              <li>Transmit viruses, malware, or other malicious code</li>
              <li>Collect or harvest personal information about other users</li>
              <li>Use the Service for any commercial purpose without authorization</li>
              <li>Engage in any activity that could damage our reputation or business</li>
            </ul>
          </section>

          {/* Subscription and Payments */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              6. Subscription and Payments
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  6.1 Subscription Plans
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  We offer various subscription plans with different features and pricing. By purchasing a subscription, you agree to pay the fees associated with your chosen plan. All fees are non-refundable except as required by law or explicitly stated in our refund policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  6.2 Billing and Renewal
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date. You authorize us to charge your payment method for recurring subscription fees. We reserve the right to modify pricing with 30 days notice to active subscribers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  6.3 Cancellation
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  You may cancel your subscription at any time through your account settings. Upon cancellation, you will retain access to paid features until the end of your current billing period. No refunds will be provided for partial months or unused time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  6.4 Free Trials
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  We may offer free trial periods for new subscribers. You must cancel before the trial period ends to avoid being charged. One free trial per user. We reserve the right to determine trial eligibility.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              7. Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  7.1 Our Content
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  All content, features, and functionality of the Service, including but not limited to text, graphics, logos, images, software, and AI models, are owned by NeuraNova or our licensors and are protected by copyright, trademark, patent, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  7.2 Your Content
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-2">
                  You retain ownership of content you submit to the Service. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
                  <li>Use, reproduce, modify, and display your content to provide the Service</li>
                  <li>Improve our AI models and algorithms (in anonymized form)</li>
                  <li>Create derivative works for internal development purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  7.3 AI-Generated Content
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  Content generated by our AI in response to your prompts is owned by you, subject to these Terms. However, we make no warranties about the accuracy, completeness, or originality of AI-generated content. You are responsible for reviewing and verifying AI-generated content before use.
                </p>
              </div>
            </div>
          </section>

          {/* Data and Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              8. Data Usage and Privacy
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our{' '}
              <Link href="/privacy-policy" className="text-[hsl(var(--color-neuranova-primary))] hover:underline font-medium">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              By using the Service, you consent to our data practices as described in the Privacy Policy. You acknowledge that conversations with our AI may be used to improve our services, subject to our privacy commitments.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              9. Disclaimers and Limitations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  9.1 Service Availability
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  We provide the Service on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  9.2 AI Limitations
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  Our AI companion is a machine learning system and may produce inaccurate, incomplete, or inappropriate responses. NeuraNova is NOT a substitute for professional advice (medical, legal, financial, etc.). You should not rely solely on AI-generated content for important decisions. We disclaim all liability for actions taken based on AI responses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  9.3 No Warranties
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY, OR COMPLETENESS OF THE SERVICE OR ITS CONTENT.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>NeuraNova shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Our total liability for any claims related to the Service shall not exceed the amount you paid us in the 12 months preceding the claim</li>
              <li>We are not liable for any loss of profits, revenue, data, or business opportunities</li>
              <li>We are not responsible for third-party content, services, or actions</li>
              <li>These limitations apply even if we have been advised of the possibility of such damages</li>
            </ul>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mt-3">
              Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above limitations may not apply to you.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              11. Indemnification
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              You agree to indemnify, defend, and hold harmless NeuraNova, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from: (a) your use or misuse of the Service; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) any content you submit to the Service.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              12. Termination
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>Violation of these Terms or our policies</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Extended periods of inactivity</li>
              <li>Requests by law enforcement or government agencies</li>
              <li>Unexpected technical or security issues</li>
            </ul>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mt-3">
              Upon termination, your right to use the Service will immediately cease. We may delete your account and all associated data. Termination does not relieve you of any obligations incurred prior to termination.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              13. Dispute Resolution and Arbitration
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  13.1 Informal Resolution
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  Before filing a claim, you agree to contact us at legal@neuranova.ai to seek an informal resolution. We will attempt to resolve disputes informally within 60 days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  13.2 Binding Arbitration
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  If informal resolution fails, you agree that any dispute arising from these Terms or the Service will be resolved through binding arbitration rather than in court, except for disputes that may be brought in small claims court. Arbitration will be conducted by a neutral arbitrator in accordance with applicable arbitration rules.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  13.3 Class Action Waiver
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  You agree to bring claims only in your individual capacity and not as part of any class, collective, or representative action. There will be no right to arbitrate any dispute on a class action basis.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              14. Governing Law and Jurisdiction
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any legal action or proceeding related to your access to or use of the Service shall be instituted in the courts of [Your Jurisdiction].
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              15. Changes to Terms
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of the Service after changes take effect constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Service and cancel your account.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              16. Severability and Waiver
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver must be in writing and signed by an authorized representative of NeuraNova.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              17. Entire Agreement
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              These Terms, together with our Privacy Policy and any other legal notices published by us on the Service, constitute the entire agreement between you and NeuraNova regarding the Service. These Terms supersede all prior or contemporaneous agreements, communications, and proposals, whether oral or written.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              18. Contact Information
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-4">
              If you have any questions, concerns, or feedback about these Terms of Service, please contact us:
            </p>
            <div className="bg-[hsl(var(--color-neuranova-card-pink))] rounded-lg p-6 space-y-2">
              <p className="text-[hsl(var(--color-neuranova-text-primary))] font-semibold">
                NeuraNova Legal Team
              </p>
              <p className="text-[hsl(var(--color-neuranova-text-secondary))]">
                Email:{' '}
                <a href="mailto:legal@neuranova.ai" className="text-[hsl(var(--color-neuranova-primary))] hover:underline">
                  legal@neuranova.ai
                </a>
              </p>
              <p className="text-[hsl(var(--color-neuranova-text-secondary))]">
                Support:{' '}
                <a href="mailto:support@neuranova.ai" className="text-[hsl(var(--color-neuranova-primary))] hover:underline">
                  support@neuranova.ai
                </a>
              </p>
              <p className="text-[hsl(var(--color-neuranova-text-secondary))]">
                Website:{' '}
                <a href="https://neuranova.ai" className="text-[hsl(var(--color-neuranova-primary))] hover:underline">
                  neuranova.ai
                </a>
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-[hsl(var(--color-neuranova-card-blue))] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-3">
              Acknowledgment
            </h3>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.
            </p>
          </section>

        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Return to Homepage
          </Link>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[hsl(var(--color-neuranova-text-primary))] font-semibold rounded-full border-2 border-[hsl(var(--color-neuranova-border))] hover:border-[hsl(var(--color-neuranova-primary))] transition-all duration-300"
          >
            View Privacy Policy
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-[hsl(var(--color-neuranova-border))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-[hsl(var(--color-neuranova-text-secondary))]">
            © {new Date().getFullYear()} NeuraNova. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
