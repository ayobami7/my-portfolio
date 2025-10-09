'use client';

import { projects } from '@/data'
import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const RecentProjects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <div className="mb-8">
            <div className="text-xs text-cyan-700 mb-2">SECTION_04 &gt; PROJECTS</div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">ACTIVE_DEPLOYMENTS</h2>
            <div className="h-1 w-20 bg-cyan-500"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {['ALL', 'AI', 'WEB', 'DEVOPS', 'TOOLS', 'SECURITY'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border text-xs transition-all ${
                  activeFilter === filter
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                    : 'border-cyan-900 text-cyan-700 hover:border-cyan-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <div key={i} className="border border-cyan-900 p-6 hover:border-cyan-500 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <project.icon className="w-full h-full text-cyan-500" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs text-cyan-700 mb-1">PROJECT_{String(i + 1).padStart(2, '0')}</div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-1">{project.title}</h3>
                      <p className="text-cyan-600 text-xs">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'OPERATIONAL' ? 'bg-green-500 animate-pulse' :
                        project.status === 'IN_DEVELOPMENT' ? 'bg-yellow-500 animate-pulse' :
                        'bg-cyan-500'
                      }`}></div>
                      <span className={
                        project.status === 'OPERATIONAL' ? 'text-green-500' :
                        project.status === 'IN_DEVELOPMENT' ? 'text-yellow-500' :
                        'text-cyan-500'
                      }>{project.status}</span>
                    </div>
                  </div>

                  <p className="text-cyan-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-1 border border-cyan-800 text-xs text-cyan-500">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all group"
                    >
                      <span className="text-xs">VIEW_PROJECT</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default RecentProjects