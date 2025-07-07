'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <span
          className={`font-bold text-2xl transition ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          Dhio
        </span>
        <div className="space-x-6 text-lg font-medium">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition ${
                scrolled ? 'text-black hover:text-blue-500' : 'text-white hover:text-blue-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
