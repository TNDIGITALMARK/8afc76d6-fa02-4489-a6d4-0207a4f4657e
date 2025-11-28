'use client';

import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for getting started',
      features: [
        'Text chat with AI',
        '3 personality options',
        'Streaks & XP system',
        'Shareable stories',
        'Ad-supported experience'
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-blue-50 to-blue-100',
      buttonStyle: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'For power users who want more',
      features: [
        'Everything in Free',
        'Voice chat capability',
        'Photo chat & sharing',
        '10+ personality options',
        'Custom avatar creation',
        'Priority support',
        'Ad-free experience'
      ],
      cta: 'Go Pro',
      popular: true,
      gradient: 'from-pink-50 to-pink-100',
      buttonStyle: 'bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:shadow-xl hover:scale-105'
    },
    {
      name: 'Ultimate',
      price: '$19.99',
      period: 'per month',
      description: 'Unlock the full potential',
      features: [
        'Everything in Pro',
        'Unlimited personalities',
        'Advanced roleplay packs',
        'API access for developers',
        'Priority AI processing',
        'Exclusive community access',
        'Early feature releases',
        'Premium story templates'
      ],
      cta: 'Go Ultimate',
      popular: false,
      gradient: 'from-purple-50 to-purple-100',
      buttonStyle: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-xl hover:scale-105'
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include our core AI companion features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-pink-400 scale-105 md:scale-110' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center font-semibold transition-all duration-300 ${plan.buttonStyle}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            💰 30-day money-back guarantee on all paid plans
          </p>
        </div>
      </div>
    </section>
  );
}
