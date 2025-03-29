import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from 'next/link'
import { navItems, socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {

    const date = new Date()

  return (
    <footer id='contact' className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            {navItems.map((navLinks, index)=>(
              <a key={index} href={navLinks.link} className="hover:text-secondary">{navLinks.name}</a>
            ))}
          </nav>

          <div className="flex flex-row space-x-4 mb-10">
          {socialMedia.map((item)=> (
            <Link key={item.id} href={item.url} className="">
              <Image src={item.img} alt="social media" height={35} width={24} className=''/>
            </Link>
          ))}
          </div>
          
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2" target="_blank" action="https://formsubmit.co/671eab9bc6ba60d1fca4994207ed2678" method="POST">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" name='email' className="rounded-md" />
              </div>
              <Button type="submit" size="lg" variant="ghost" className="rounded-md">Get In Touch</Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {date.getFullYear()} Ayobami Paul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
