'use client';

import { projects } from '@/data'
import React, { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, FileText } from 'lucide-react'
import { HudLink, SectionHeader, Tag } from '@/components/ui/hud'

const filters = ['ALL', 'AI', 'WEB', 'DEVOPS', 'TOOLS', 'SECURITY'];

const statusStyles: Record<string, { dot: string; text: string }> = {
  OPERATIONAL: { dot: 'bg-ok animate-pulse', text: 'text-ok' },
  IN_DEVELOPMENT: { dot: 'bg-signal animate-pulse', text: 'text-signal' },
};

const RecentProjects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            index="SECTION_04 > PROJECTS"
            title="Active Deployments"
            count={projects.length}
            subtitle="Things I've built and shipped"
          />

          {/* Filter tabs */}
          <div className="-mx-4 mb-6 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-8 sm:flex-wrap sm:justify-end sm:px-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 border px-3 py-1.5 text-[11px] transition-colors ${
                  activeFilter === filter
                    ? 'border-signal bg-signal-soft text-fg'
                    : 'border-line text-faint hover:border-line-strong hover:text-dim'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="border border-dashed border-line p-10 text-center text-sm text-faint">
            &gt; No deployments in this category yet.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const status = statusStyles[project.status] ?? { dot: 'bg-dim', text: 'text-dim' };
              const index = projects.indexOf(project) + 1;
              return (
                <article
                  key={project.title}
                  className="group relative flex flex-col border border-line bg-panel/80 p-4 transition-colors hover:border-line-strong sm:p-5"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="text-faint">
                      Mission Code: <span className="text-fg">PRJ_{String(index).padStart(2, '0')}</span>
                      <span className="ml-2 text-faint">/ {project.category}</span>
                    </span>
                    <span className={`flex items-center gap-2 ${status.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {project.status}
                    </span>
                  </div>

                  <div className="mb-3 flex items-start gap-3">
                    <project.icon className="mt-1 h-5 w-5 shrink-0 text-faint transition-colors group-hover:text-signal" />
                    <div>
                      <h3 className="text-lg text-fg">{project.title}</h3>
                      <p className="text-xs text-faint">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-dim">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.blogPost && (
                      <Link
                        href={project.blogPost}
                        className="hud-chip inline-flex items-center gap-2 border border-line-strong bg-panel-raised px-4 py-2.5 text-xs uppercase tracking-wide text-dim transition-colors hover:border-fg hover:text-fg"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Write-up
                      </Link>
                    )}
                    {project.link !== '#' && (
                      <HudLink href={project.link} target="_blank" rel="noopener noreferrer" className="group/link">
                        <span>View Project »</span>
                        <ExternalLink className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </HudLink>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentProjects
