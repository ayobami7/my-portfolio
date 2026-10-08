import React from 'react'

const Footer = () => {

  const date = new Date()

  return (
    <footer className="border-t border-line px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <div>&copy; {date.getFullYear()} AYOBAMI_PAUL.exe | ALL_RIGHTS_RESERVED</div>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ok" />
            NODE: ACTIVE
          </span>
          <span>v3.0.0</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
