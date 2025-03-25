import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from 'next/link'

const Footer = () => {

    const date = new Date()

  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-secondary">Home</a>
            <a href="#" className="hover:text-secondary">About</a>
            <a href="#" className="hover:text-secondary">Services</a>
            <a href="#" className="hover:text-secondary">Products</a>
            <a href="#" className="hover:text-secondary">Contact</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Link href='#' className="rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href='#' className="rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link >
            <Link href='#' className="rounded-full">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href='#' className="rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" className="rounded-md" />
              </div>
              <Button type="submit" className="rounded-md">Get In Touch</Button>
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
