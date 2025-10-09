'use client';

import { useEffect, useState } from "react";
import { ChevronRight, File, Mail} from "lucide-react";


function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = ['PYTHON', 'TYPESCRIPT', 'REACT', 'NEXT.JS', 'AI/ML', 'SYSTEM_DESIGN', 'API_DESIGN', 'CLOUD_ARCH'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl w-full">
        <div className="border border-cyan-900 p-8 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500"></div>


           <div className="mb-6">
              <div className="text-xs text-cyan-700 mb-2">SYSTEM_INIT &gt; LOADING_PROFILE</div>
              <h1 className="text-5xl font-bold mb-2 text-cyan-400" style={{
                textShadow: '0 0 20px rgba(0,255,255,0.5)'
              }}>
                AYOBAMI PAUL
              </h1>
              <div className="text-cyan-600 text-sm mb-4">SOFTWARE_ENGINEER.class</div>
            </div>

            <div className="mb-8">
              <div className="text-lg mb-4">
                <span className="text-cyan-700">&gt; </span>
                <span className="text-cyan-400">A software engineer passionate about </span>
                <span className="text-cyan-300 inline-block min-w-[180px]">
                  {skills[currentSkill]}
                  <span className="animate-pulse">_</span>
                </span>
              </div>
              <div className="text-cyan-700 text-sm space-y-1">
                <p>&gt; Developing projects driven by passion and commitment</p>
                <p>&gt; Building scalable systems and AI-powered solutions</p>
                <p>&gt; Continuous learning and system design enthusiast</p>
              </div>
            </div>


          {/* CTA Buttons */}
            <div className="flex gap-4">
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all group">
                <span>VIEW_PROJECTS</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 border border-cyan-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                <Mail className="w-4 h-4" />
                <span>CONTACT</span>
              </a>
              <a href="/resume.pdf"  target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                <File className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>


        </div>
      </div>
    </section>
  );
}

export { Hero };
