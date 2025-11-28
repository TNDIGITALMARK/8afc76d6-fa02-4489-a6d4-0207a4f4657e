'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah K.',
      role: 'Content Creator',
      quote: 'NeuraNova changed my daily routine! The AI personalities feel so real and supportive. I use it every morning for motivation.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Mike R.',
      role: 'Writer',
      quote: 'The story generation feature is incredible! I\'ve created over 50 stories and shared them with friends. Best creative tool ever.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emma L.',
      role: 'Student',
      quote: 'As a busy student, the daily planning feature keeps me organized. The gamification makes productivity actually fun!',
      rating: 5,
      avatar: '👩‍🎓'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Downloads', icon: '📱' },
    { value: '250K+', label: 'Daily Chats', icon: '💬' },
    { value: '15,000+', label: 'Stories Shared', icon: '📚' },
    { value: '85%', label: 'Retention Rate', icon: '❤️' },
    { value: '4.9/5', label: 'User Rating', icon: '⭐' },
    { value: '24/7', label: 'Availability', icon: '🌍' }
  ];

  return (
    <section className="py-20 md:py-32 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-gray-600">
              Join our growing community of happy users
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from our amazing community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
