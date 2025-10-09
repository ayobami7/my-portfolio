import React from 'react'

const Footer = () => {

    const date = new Date()

  return (
      <footer className="border-t border-cyan-900 py-6 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-xs text-cyan-700">
          <div>&copy; {date.getFullYear()} AYOBAMI_PAUL.exe | ALL_RIGHTS_RESERVED</div>
          <div className="flex gap-4">
            <span>NODE: ACTIVE</span>
            <span>LATENCY: 12ms</span>
            <span>v2.0.0</span>
          </div>
        </div>
      </footer> 
  )
}

export default Footer
