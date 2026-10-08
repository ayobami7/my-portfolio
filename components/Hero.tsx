'use client';

import { useEffect, useState } from "react";
import { ChevronRight, File, Mail } from "lucide-react";
import { projects } from "@/data";
import { Brackets, HudLink } from "@/components/ui/hud";

const skills = ['PYTHON', 'TYPESCRIPT', 'REACT', 'NEXT.JS', 'AI/ML', 'SYSTEM_DESIGN', 'API_DESIGN', 'CLOUD_ARCH'];

// Deterministic bar heights for the decorative activity strip
const bars = Array.from({ length: 36 }, (_, i) =>
  Math.round(18 + 14 * Math.sin(i / 2.6) + 10 * Math.sin(i / 1.3 + 1) + 12)
);

const operational = projects.filter(p => p.status === 'OPERATIONAL').length;
const inDevelopment = projects.filter(p => p.status === 'IN_DEVELOPMENT').length;
const byCategory = Object.entries(
  projects.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {})
).sort((a, b) => b[1] - a[1]);

const Globe = () => (
  <svg viewBox="-160 -160 320 320" className="h-full w-full" aria-hidden>
    <g fill="none" stroke="currentColor" strokeWidth="0.8">
      <ellipse rx="150" ry="58" transform="rotate(-28)" strokeDasharray="4 5" className="text-line-strong" />
      <g className="text-faint">
        <circle r="110" className="text-dim" stroke="currentColor" />
        {[22, 50, 76, 98].map(rx => (
          <ellipse key={rx} rx={rx} ry="110" />
        ))}
        {[-80, -48, -16, 16, 48, 80].map(y => {
          const half = Math.sqrt(110 * 110 - y * y);
          return <ellipse key={y} cy={y} rx={half} ry={half * 0.12} />;
        })}
      </g>
    </g>
    <circle cx="38" cy="-30" r="4" className="fill-signal">
      <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="38" cy="-30" r="12" fill="none" className="stroke-signal" strokeWidth="0.8" opacity="0.5" />
    <path d="M 46 -36 L 90 -80 L 150 -80" fill="none" className="stroke-signal" strokeWidth="0.8" />
  </svg>
);

function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-4 pt-20 pb-10 sm:px-6">
      <div className="relative w-full max-w-6xl border border-line bg-panel/60">
        <Brackets />

        {/* Title bar */}
        <div className="flex flex-col gap-1 border-b border-line px-4 py-3 sm:flex-row sm:items-end sm:justify-between sm:px-5">
          <div>
            <p className="text-sm text-fg">Engineer Details</p>
            <p className="text-[11px] text-faint">Detailed dossier of engineering personnel</p>
          </div>
          <p className="text-[11px] text-faint">SYSTEM_INIT &gt; LOADING_PROFILE</p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr]">
          {/* Dossier column */}
          <aside className="order-2 grid border-t border-line sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:border-t-0 lg:border-r">
            <div className="border-b border-line p-4 sm:border-r sm:p-5 lg:border-r-0">
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center bg-panel-raised text-lg text-dim">
                <Brackets className="border-fg" />
                AP
              </div>
              <p className="mb-3 text-sm text-fg">ENGINEER 009X-AP</p>
              <dl className="space-y-1.5 text-[11px]">
                {[
                  ['ROLE', 'SOFTWARE ENGINEER'],
                  ['FOCUS', 'FRONTEND & SECURITY'],
                  ['STATUS', 'OPEN TO WORK'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <dt className="w-20 shrink-0 text-faint">» {k}</dt>
                    <dd className="text-dim">: {v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-b border-line p-4 sm:border-b-0 sm:p-5 lg:border-b">
              <p className="mb-3 text-sm text-fg">Project Activity</p>
              <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                  ['Total', projects.length],
                  ['Live', operational],
                  ['Building', inDevelopment],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[11px] text-faint">
                      {label} <span className="text-signal">▾</span>
                    </p>
                    <p className="text-3xl text-fg tabular-nums">{String(value).padStart(2, '0')}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {byCategory.map(([category, count]) => (
                  <div key={category} className="flex items-center gap-2">
                    <span className="w-9 border border-line py-1 text-center text-xs text-signal tabular-nums">
                      {String(count).padStart(2, '0')}
                    </span>
                    <span className="flex-1 border border-line py-1 text-center text-[11px] text-dim">{category}</span>
                    <span className="grid grid-cols-5 gap-0.5" aria-hidden>
                      {Array.from({ length: 10 }, (_, i) => (
                        <span key={i} className={`h-1.5 w-1.5 ${i < count * 2 ? 'bg-dim' : 'bg-line'}`} />
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden p-5 lg:block">
              <p className="mb-2 text-sm text-fg">Brief Announcement..</p>
              <p className="text-[11px] leading-relaxed text-faint">
                &gt; Currently exploring server-side rendering optimisation in Next.js 15.
              </p>
            </div>
          </aside>

          {/* Main readout */}
          <div className="relative order-1 overflow-hidden lg:order-2">
            <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-[1fr_220px] lg:p-8 xl:grid-cols-[1fr_280px]">
              <div className="relative z-10">
                <p className="mb-2 text-[11px] text-faint">Target Operation …</p>
                <h1 className="mb-1 text-4xl leading-none text-fg sm:text-5xl lg:text-6xl">
                  AYOBAMI<br />PAUL
                </h1>
                <p className="mb-6 text-sm text-signal">SOFTWARE_ENGINEER.class</p>

                <p className="mb-4 text-sm text-dim sm:text-base">
                  <span className="text-faint">&gt; </span>
                  A software engineer passionate about{' '}
                  <span className="inline-block text-fg">
                    {skills[currentSkill]}
                    <span className="animate-blink text-signal">_</span>
                  </span>
                </p>
                <div className="mb-8 max-w-md space-y-1 text-xs leading-relaxed text-faint sm:text-sm">
                  <p>&gt; Building systems that scale, one optimization at a time.</p>
                  <p>&gt; Software engineer reducing load times and finding vulnerabilities.</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <HudLink href="#projects" variant="primary" className="group">
                    <span>VIEW_PROJECTS</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </HudLink>
                  <HudLink href="#contact">
                    <Mail className="h-4 w-4" />
                    <span>CONTACT</span>
                  </HudLink>
                  <HudLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <File className="h-4 w-4" />
                    <span>DOWNLOAD CV</span>
                  </HudLink>
                </div>
              </div>

              <div className="relative mx-auto hidden aspect-square w-full max-w-[280px] md:block">
                <Globe />
                <p className="absolute top-[12%] right-0 text-xs text-signal">SIGNAL: ONLINE</p>
              </div>
            </div>

            {/* Activity strip */}
            <div className="border-t border-line px-4 pt-4 pb-3 sm:px-6 lg:px-8" aria-hidden>
              <div className="flex h-12 items-end gap-[3px]">
                {bars.map((h, i) => (
                  <span key={i} className="flex-1 bg-line-strong" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-faint">
                <span>ACTIVITY_LOG</span>
                <span>BUILD → SHIP → ITERATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
