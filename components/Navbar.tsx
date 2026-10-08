'use client';

import { navItems } from '@/data';
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const fullText = "AYOBAMI_PAUL.exe";

const hrefFor = (section: string) =>
  section === 'WRITING' ? '/writing' : `/#${section.toLowerCase()}`;

const Navbar = () => {
  const pathname = usePathname();
  const [time, setTime] = useState<string | null>(null);
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => setTime(new Date().toTimeString().substring(0, 8));
    tick();
    const timer = setInterval(tick, 1000);
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

  // Highlight the section currently in view on the home page
  useEffect(() => {
    if (pathname !== '/') return;
    const sections = navItems
      .filter(s => s !== 'WRITING')
      .map(s => document.getElementById(s.toLowerCase()))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (section: string) =>
    section === 'WRITING'
      ? pathname.startsWith('/writing')
      : pathname === '/' && activeSection === section.toLowerCase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-fg">
            <span className="h-2 w-2 bg-signal" />
            <span>
              {typedText}<span className="animate-blink text-signal">_</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(section => (
              <Link
                key={section}
                href={hrefFor(section)}
                className={`border px-3 py-1.5 text-[11px] tracking-wide transition-colors ${
                  isActive(section)
                    ? 'border-signal text-fg'
                    : 'border-line text-faint hover:border-line-strong hover:text-dim'
                }`}
              >
                {section}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs tabular-nums text-faint sm:inline">
              {time ?? '--:--:--'}
            </span>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              className="border border-line p-2 text-dim hover:text-fg lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((section, i) => (
              <Link
                key={section}
                href={hrefFor(section)}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-line py-3 text-xs tracking-wide last:border-b-0 ${
                  isActive(section) ? 'text-fg' : 'text-dim'
                }`}
              >
                <span>
                  <span className="mr-3 text-faint">{String(i + 1).padStart(2, '0')}</span>
                  {section}
                </span>
                {isActive(section) && <span className="h-1.5 w-1.5 bg-signal" />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
