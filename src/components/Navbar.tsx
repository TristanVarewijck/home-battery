'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
// Logo is now referenced directly from public folder

export function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                href="tel:+31624570564"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-3 h-3" />
                <span>+31 6 24570564</span>
              </a>
              <a
                href="mailto:thuisbatterijen@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-3 h-3" />
                <span>thuisbatterijen@gmail.com</span>
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
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xl font-bold text-white">
                <Image
                  src="/logo.svg"
                  alt="GridBuddy Logo"
                  className="lg:w-40 w-32 md:36"
                  width={175}
                  height={175}
                />
              </Link>
              <span className="text-white hidden lg:block">|</span>
              <p className="text-white text-sm italic hidden lg:block">
                De beste vriend van je portemonnee en de planeet!
              </p>
            </div>

            {/* Desktop Navigation */}
            {/* <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
              >
                <Info className="w-4 h-4" />
                <span>Over ons</span>
              </Link>
            </div> */}

            {/* Mobile Menu Button */}
            {/* <div className="md:hidden">
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
            </div> */}
          </div>

          {/* Mobile Menu */}
          {/* {isMenuOpen && (
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
          )} */}
        </div>
      </nav>
    </>
  );
}
