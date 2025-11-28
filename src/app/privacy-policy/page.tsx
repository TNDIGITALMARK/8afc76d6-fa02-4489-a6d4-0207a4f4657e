import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - NeuraNova',
  description: 'Privacy Policy for NeuraNova AI Companion. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              Introduction
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              Welcome to NeuraNova. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our AI companion service.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  Personal Information
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-2">
                  When you create an account or use our services, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
                  <li>Name and email address</li>
                  <li>Profile information you choose to provide</li>
                  <li>Account credentials and authentication data</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  Usage Data
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-2">
                  We automatically collect information about your interaction with our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
                  <li>Conversation data with our AI companion</li>
                  <li>Usage patterns and feature preferences</li>
                  <li>Device information and browser type</li>
                  <li>IP address and general location data</li>
                  <li>Log files and analytics data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze usage patterns, and personalize content. You can manage cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>Provide and maintain our AI companion services</li>
              <li>Personalize your experience and improve our AI responses</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send service updates, security alerts, and support messages</li>
              <li>Analyze usage trends to improve features and functionality</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Data Storage and Security
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              We take data security seriously and implement industry-standard measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li>End-to-end encryption for sensitive data transmission</li>
              <li>Secure data storage with encrypted databases</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mt-3">
              While we strive to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but continually work to maintain the highest standards.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Data Sharing and Disclosure
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              We do not sell your personal information. We may share your data only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our services (e.g., cloud hosting, payment processing, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection:</strong> To protect the rights, property, or safety of NeuraNova, our users, or the public</li>
              <li><strong>With Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-3">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-neuranova-text-secondary))] ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restriction:</strong> Request limitation of how we process your data</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
            </ul>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mt-3">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@neuranova.ai" className="text-[hsl(var(--color-neuranova-primary))] hover:underline">
                privacy@neuranova.ai
              </a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              International Data Transfers
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws, including GDPR and other international regulations.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Data Retention
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Third-Party Links and Services
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              Our services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              Contact Us
            </h2>
            <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[hsl(var(--color-neuranova-card-blue))] rounded-lg p-6 space-y-2">
              <p className="text-[hsl(var(--color-neuranova-text-primary))] font-semibold">
                NeuraNova Privacy Team
              </p>
              <p className="text-[hsl(var(--color-neuranova-text-secondary))]">
                Email:{' '}
                <a href="mailto:privacy@neuranova.ai" className="text-[hsl(var(--color-neuranova-primary))] hover:underline">
                  privacy@neuranova.ai
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

          {/* GDPR and CCPA Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--color-neuranova-text-primary))] mb-4">
              GDPR and CCPA Compliance
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  For EU Residents (GDPR)
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-neuranova-text-primary))] mb-2">
                  For California Residents (CCPA)
                </h3>
                <p className="text-[hsl(var(--color-neuranova-text-secondary))] leading-relaxed">
                  If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to opt-out of the sale of personal information. We do not sell personal information.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Return to Homepage
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
