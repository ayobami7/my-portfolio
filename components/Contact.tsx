import React from 'react'
import { socialMedia } from '@/data'
import { Mail } from 'lucide-react'
import { Brackets, HudLink, SectionHeader } from '@/components/ui/hud'

const log = [
  '> INIT secure channel …',
  '> HANDSHAKE ok :: awaiting transmission',
  '> Ready to collaborate on your next project?',
]

const Contact = () => {
  return (
    <section id="contact" className="flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
      <div className="w-full max-w-6xl">
        <SectionHeader index="SECTION_05 > CONTACT" title="Initialize Connection" subtitle="Open a channel and let’s build something" />

        <div className="relative grid border border-line bg-panel/80 md:grid-cols-[1fr_320px]">
          <Brackets />

          <div className="border-b border-line p-4 sm:p-6 md:border-r md:border-b-0">
            <p className="mb-4 text-sm text-fg">Encrypted Chat Activity</p>
            <div className="mb-8 space-y-2 text-xs leading-relaxed text-faint sm:text-sm">
              {log.map((line, i) => (
                <p key={i} className={i === log.length - 1 ? 'text-fg' : undefined}>
                  {line}
                  {i === log.length - 1 && <span className="animate-blink text-signal">_</span>}
                </p>
              ))}
            </div>
            <HudLink href="mailto:hello@ayobamipaul.com" variant="primary" className="w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              <span>SEND_MESSAGE</span>
            </HudLink>
          </div>

          <div>
            <p className="border-b border-line px-4 py-3 text-sm text-fg sm:px-6">Channels</p>
            {socialMedia.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-line px-4 py-4 text-sm last:border-b-0 hover:bg-panel-raised sm:px-6"
              >
                <span className="flex items-center gap-3 text-dim group-hover:text-fg">
                  <social.icon className="h-4 w-4 text-faint group-hover:text-signal" />
                  {social.label}
                </span>
                <span className="text-faint group-hover:text-signal">»</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
