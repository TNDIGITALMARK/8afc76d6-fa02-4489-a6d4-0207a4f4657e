'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your <span className="text-pink-400">Lovable AI</span> Companion,{' '}
              <span className="text-pink-400">Coach</span>, and <span className="text-pink-400">Storyteller</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Simple, fast, and emotionally rich AI to chat, plan, and create stories.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Chatting
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-pink-400 hover:text-pink-500 transition-all duration-300"
              >
                Sign Up Free
              </Link>
            </div>

            {/* Gamification Preview */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-xs text-gray-500">Streak</p>
                  <p className="text-sm font-bold text-gray-900">7 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="text-xs text-gray-500">XP</p>
                  <p className="text-sm font-bold text-gray-900">2,450</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-pink-200 rounded-full opacity-50 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl animate-pulse delay-700"></div>

              {/* Robot Image */}
              <div className="relative z-10 animate-float">
                <Image
                  src="/generated/hero-robot.png"
                  alt="NeuraNova AI Companion Robot"
                  width={400}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
