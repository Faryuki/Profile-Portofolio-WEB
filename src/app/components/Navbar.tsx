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

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <span
          className={`font-bold text-2xl transition ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          Dhio
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map((item) => (
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl transition ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)} // Tutup menu saat diklik
              className="block text-gray-800 text-lg font-medium hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
