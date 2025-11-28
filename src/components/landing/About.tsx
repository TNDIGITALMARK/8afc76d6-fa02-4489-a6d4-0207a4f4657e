'use client';

export default function About() {
  const team = [
    {
      name: 'Alex Chen',
      title: 'Lead Alchemist',
      bio: 'AI researcher and product visionary. Transforms complex algorithms into delightful user experiences.',
      avatar: '🧙‍♂️',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Jordan Smith',
      title: 'Code Sorcerer',
      bio: 'Full-stack wizard who brings magical features to life. Master of scalability and performance.',
      avatar: '🧙‍♀️',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Riley Park',
      title: 'Design Enchanter',
      bio: 'Creates beautiful, intuitive interfaces that users love. Pixel-perfect craftsperson.',
      avatar: '🎨',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Sam Taylor',
      title: 'Growth Wizard',
      bio: 'Community builder and storyteller. Connects NeuraNova with users around the world.',
      avatar: '✨',
      gradient: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet the Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate group of creators, engineers, and dreamers building the future of AI companionship.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            We believe everyone deserves access to emotional support, creative inspiration, and personal growth tools.
            NeuraNova was born from the vision of making AI companionship accessible, engaging, and genuinely helpful
            for people's daily lives. We're committed to building technology that feels human, understands context,
            and grows with you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
            >
              {/* Avatar */}
              <div className="mb-4 inline-block">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {member.avatar}
                </div>
              </div>

              {/* Info */}
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h4>
              <p className="text-sm font-semibold text-pink-500 mb-3">
                {member.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="text-xl font-bold mb-2">Innovation First</h4>
            <p className="text-gray-600">
              We push boundaries to create AI experiences that feel magical and natural.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">❤️</div>
            <h4 className="text-xl font-bold mb-2">User-Centric</h4>
            <p className="text-gray-600">
              Every feature is designed with real user needs and feedback at the core.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="text-xl font-bold mb-2">Growth Mindset</h4>
            <p className="text-gray-600">
              We believe in continuous learning and helping our users grow every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
