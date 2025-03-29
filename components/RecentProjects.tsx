import { projects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { MoveUpRight } from 'lucide-react'

const RecentProjects = () => {
  return (
    <div id='projects' className="py-16 text-white">
      <h1 className="text-5xl md:text-7xl text-center mb-12 p-10">Projects</h1>

      <div className="max-w-7xl mx-auto space-y-16">
        {projects.map((item) => (
          <div
            key={item.id}
            className="grid md:grid-cols-2 items-center gap-8 p-6 bg-[#1E293B] rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            {/* Image on the left */}
            <div className="relative w-full">
              <Image
                src={item.img1}
                alt="Project image"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col space-y-4">
              <div className="p-2 flex space-x-2">
                  {item.iconLists.map((icon, i) => (
                    <Image key={i} src={icon} alt="tech stack" width={24} height={24} />
                  ))}
              </div>
              <h2 className="p-2 text-xl font-bold">{item.title}</h2>
              <p className="p-2 text-text-secondary">{item.des}</p>
              <Link href={item.link} className='w-48'>
                <Button variant='ghost' className="py-2 rounded-md flex items-center">
                  Project Link <MoveUpRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects