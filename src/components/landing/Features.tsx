'use client';

export default function Features() {
  const features = [
    {
      icon: '💬',
      title: 'Multi-Personality AI Chat',
      description: 'Engage in meaningful conversations with AI personalities tailored to your needs - from empathetic listeners to motivational coaches.',
      gradient: 'from-blue-100 to-blue-50'
    },
    {
      icon: '🔥',
      title: 'Gamified Streaks & XP System',
      description: 'Level up your skills and earn rewards with our engaging XP system. Build streaks to unlock exclusive features and content.',
      gradient: 'from-orange-100 to-orange-50'
    },
    {
      icon: '📚',
      title: 'Story Generation & Sharing',
      description: 'Create captivating stories with AI assistance and share them with the community. Explore endless creative possibilities.',
      gradient: 'from-green-100 to-green-50'
    },
    {
      icon: '📅',
      title: 'Daily Planning & Reminders',
      description: 'Stay organized with AI-powered planning tools. Get smart reminders and productivity insights tailored to your routine.',
      gradient: 'from-purple-100 to-purple-50'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unlock Your Potential
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover powerful features designed to enhance your daily life, boost creativity, and foster personal growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-pink-600 transition group"
          >
            Explore All Features
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
