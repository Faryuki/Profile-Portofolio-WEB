'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span
          className={`font-bold text-2xl transition ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          Dhio
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition ${
                scrolled
                  ? 'text-black hover:text-blue-500'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl transition ${
              scrolled ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
