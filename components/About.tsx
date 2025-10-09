import React from 'react'
import { aboutPoints, services } from '@/data'
import { Code, Terminal } from 'lucide-react'
import { div } from 'motion/react-client'

const About = () => {
  return (
    <>
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <div className="mb-8">
            <div className="text-xs text-cyan-700 mb-2">SECTION_02 &gt; ABOUT_ME</div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">PROFILE_DATA</h2>
            <div className="h-1 w-20 bg-cyan-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-cyan-900 p-6">
              <h3 className="text-cyan-500 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                BIO_INFO
              </h3>
              <div className="space-y-2 text-sm">
                {aboutPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-cyan-700 mt-1">&gt;</span>
                    <span className="text-cyan-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-cyan-900 p-6">
              <h3 className="text-cyan-500 mb-4 flex items-center gap-2">
                <Code className="w-4 h-4" />
                TECH_STACK
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Python', level: 95 },
                  { name: 'TypeScript/JavaScript', level: 90 },
                  { name: 'React/Next.js', level: 88 },
                  { name: 'AI/ML (TensorFlow)', level: 80 },
                  { name: 'System Design', level: 85 },
                  { name: 'Cloud (AWS/GCP)', level: 78 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-cyan-400">{skill.name}</span>
                      <span className="text-cyan-700">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-cyan-900 relative overflow-hidden">
                      <div 
                        className="h-full bg-cyan-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <div className="mb-8">
            <div className="text-xs text-cyan-700 mb-2">SECTION_03 &gt; SERVICES</div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">WHAT_I_DO</h2>
            <div className="h-1 w-20 bg-cyan-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-cyan-900 p-6 hover:border-cyan-500 transition-all group">
                <service.icon className="w-8 h-8 text-cyan-700 mb-4 group-hover:text-cyan-500 transition-colors" />
                <h3 className="text-xl text-cyan-400 mb-2">{service.title}</h3>
                <p className="text-cyan-700 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, j) => (
                    <span key={j} className="px-2 py-1 border border-cyan-800 text-xs text-cyan-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </>
  )
}

export default About