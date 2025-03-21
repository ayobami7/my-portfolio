import React from 'react'
import { BentoGrid } from './ui/bento-grid'
// import { gridItems } from '@/data'

const About = () => {
  return (
    <div className='bg-teal-700 h-screen'>
        <h1 className='text-5xl md:text-7xl text-text-primary text-center'>About me</h1>
        <BentoGrid>
            {/* {gridItems.map((item) =>)} */}
        </BentoGrid>
    </div>
  )
}

export default About