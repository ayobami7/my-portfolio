import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const About = () => {
  return (
    <div id='about' className=''>
        <h1 className='text-5xl md:text-7xl text-center pt-20'>About me</h1>
        <BentoGrid className="w-full p-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={` bg-[#1E293B]  text-text-primary ${item.className}`}

          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default About