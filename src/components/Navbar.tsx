'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Secondary Navbar - Contact Info */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-[104px]'
        }`}
      >
        <div className="container mx-auto px-4 hidden md:block">
          <div className="flex items-center justify-between h-10">
            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="tel:0201234567"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-3 h-3" />
                <span>020 123 4567</span>
              </a>
              <a
                href="mailto:info@thuisbatterij.nl"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-3 h-3" />
                <span>info@thuisbatterij.nl</span>
              </a>
            </div>

            {/* Right side - could add additional info here */}
            <div className="text-xs text-gray-400">ISO 9001 Gecertificeerd</div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-10 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-[104px]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                ThuisBatterij
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                Over ons
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
              <div className="px-4 py-4 space-y-4">
                <Link
                  href="/about"
                  className="block text-white/90 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Over ons
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
