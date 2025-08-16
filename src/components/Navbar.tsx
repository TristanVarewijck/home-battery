'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Info } from 'lucide-react';

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
        <div className="container mx-auto px-4 hidden lg:block">
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
                href="mailto:info@gridbuddy.nl"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-3 h-3" />
                <span>info@gridbuddy.nl</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={` lg:fixed lg:top-10 left-0 right-0 z-50 lg:bg-white/10 bg-blue-900/95 lg:backdrop-blur-md lg:border-b lg:border-white/20 transition-transform duration-300 ${
          isVisible ? 'lg:translate-y-0' : 'lg:-translate-y-[104px]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                GridBuddy
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
              >
                <Info className="w-4 h-4" />
                <span>Over ons</span>
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
            <div className="lg:hidden  lg:bg-white/10 lg:backdrop-blur-md border-t-1 lg:border-white/20">
              <div className="px-4 py-4 space-y-4">
                <Link
                  href="/about"
                  className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info className="w-4 h-4" />
                  <span>Over ons</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
