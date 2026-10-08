import React from 'react'
import { aboutPoints, services } from '@/data'
import { Brackets, Panel, SectionHeader, Tag } from '@/components/ui/hud'

const skillGroups = [
  { category: 'Languages', skills: ['TypeScript', 'Python', 'Java'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['FastAPI', 'Spring Boot', 'PostgreSQL'] },
  { category: 'Tools', skills: ['Docker', 'Git', 'React Query', 'Kafka'] },
  { category: 'Exploring', skills: ['Rust', 'WebAssembly', 'tRPC'] },
]

const About = () => {
  return (
    <>
      <section id="about" className="flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
        <div className="w-full max-w-6xl">
          <SectionHeader index="SECTION_02 > ABOUT_ME" title="Profile Data" subtitle="Background, focus areas and toolkit" />

          <div className="relative grid border border-line bg-panel/80 lg:grid-cols-2">
            <Brackets />

            <div className="border-b border-line lg:border-r lg:border-b-0">
              <div className="border-b border-line px-4 py-3 text-center text-sm text-fg sm:px-5">Activity Log</div>
              <ul>
                {aboutPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 border-b border-line px-4 py-3 text-xs leading-relaxed last:border-b-0 sm:px-5 sm:text-sm">
                    <span className="shrink-0 text-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-dim">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="grid grid-cols-[110px_1fr] border-b border-line text-center text-sm text-fg sm:grid-cols-[140px_1fr]">
                <div className="border-r border-line py-3">Category</div>
                <div className="py-3">Stack</div>
              </div>
              {skillGroups.map((group) => (
                <div key={group.category} className="grid grid-cols-[110px_1fr] border-b border-line last:border-b-0 sm:grid-cols-[140px_1fr]">
                  <div className="flex items-center border-r border-line px-4 py-3 text-xs text-faint sm:px-5">
                    {group.category.toUpperCase()}
                  </div>
                  <div className="flex flex-wrap gap-2 px-4 py-3 sm:px-5">
                    {group.skills.map((s) => (
                      <Tag key={s} className={group.category === 'Exploring' ? 'border-signal/40 text-signal' : ''}>{s}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
        <div className="w-full max-w-6xl">
          <SectionHeader
            index="SECTION_03 > SERVICES"
            title="Operations List"
            count={services.length}
            subtitle="What I can take on for you"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Panel key={i} className="group transition-colors hover:border-line-strong">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[11px] text-faint">
                    Service Code: <span className="text-fg">{service.title.toLowerCase().replace(/[^a-z]+/g, '_')}</span>
                  </p>
                  <service.icon className="h-5 w-5 text-faint transition-colors group-hover:text-signal" />
                </div>
                <h3 className="mb-2 text-lg text-fg">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-dim">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
