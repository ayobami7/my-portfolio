import React from 'react'
import { socialMedia } from '@/data'
import { Mail } from 'lucide-react'


const Contact = () => {

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <div className="mb-8">
            <div className="text-xs text-cyan-700 mb-2">SECTION_05 &gt; CONTACT</div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">INITIALIZE_CONNECTION</h2>
            <div className="h-1 w-20 bg-cyan-500"></div>
          </div>

          <div className="border border-cyan-900 p-8 text-center">
            <p className="text-cyan-400 mb-8 text-lg">
              &gt; Ready to collaborate on your next project?
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a href="mailto:hello@ayobamipaul.com" className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all group">
                <Mail className="w-4 h-4" />
                <span>SEND_MESSAGE</span>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              {socialMedia.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="flex flex-col items-center gap-2 p-4 border border-cyan-900 hover:border-cyan-500 transition-all group"
                >
                  <social.icon className="w-6 h-6 text-cyan-700 group-hover:text-cyan-500" />
                  <span className="text-xs text-cyan-700 group-hover:text-cyan-500">{social.label}</span>
                </a>
              ))}
            </div>
             
          </div>
        </div>
    </section>
)
}
export default Contact