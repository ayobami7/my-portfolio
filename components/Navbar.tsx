'use client';

import { navItems } from '@/data';
import { Terminal } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const fullText = "AYOBAMI_PAUL.exe";

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-cyan-500" />
              <span className="text-sm text-cyan-500">
                {typedText}<span className="animate-pulse">_</span>
              </span>
            </div>
            <div className="flex gap-6 text-xs">
              {navItems.map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className={`hover:text-cyan-300 transition-colors ${
                    activeSection === section.toLowerCase() ? 'text-cyan-400' : 'text-cyan-700'
                  }`}
                >
                  <a href={section === 'WRITING' ? '/writing' : `#${section.toLowerCase()}`} >{section}</a>
                </button>
              ))}
            </div>
            <div className="text-xs text-cyan-700">
              {time.toTimeString().substring(0, 8)}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar