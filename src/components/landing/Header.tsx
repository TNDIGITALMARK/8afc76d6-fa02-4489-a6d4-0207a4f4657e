'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">NeuraNova</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Home
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition">
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Join Beta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <Link
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block mx-4 px-6 py-2.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium rounded-full text-center hover:shadow-lg transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Beta
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
