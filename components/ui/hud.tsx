import React from 'react'
import { cn } from '@/lib/utils'

/** Four corner brackets drawn around a positioned parent. */
export const Brackets = ({ className }: { className?: string }) => (
  <>
    <span aria-hidden className={cn('pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-line-strong', className)} />
    <span aria-hidden className={cn('pointer-events-none absolute -top-px -right-px h-3 w-3 border-r border-t border-line-strong', className)} />
    <span aria-hidden className={cn('pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-l border-b border-line-strong', className)} />
    <span aria-hidden className={cn('pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-line-strong', className)} />
  </>
)

/** Bordered dashboard panel with an optional title bar. */
export const Panel = ({
  title,
  meta,
  className,
  bodyClassName,
  children,
}: {
  title?: React.ReactNode
  meta?: React.ReactNode
  className?: string
  bodyClassName?: string
  children: React.ReactNode
}) => (
  <div className={cn('relative border border-line bg-panel/80', className)}>
    {title && (
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
        <h3 className="text-sm text-fg">{title}</h3>
        {meta && <span className="text-[11px] text-faint">{meta}</span>}
      </div>
    )}
    <div className={cn('p-4 sm:p-5', bodyClassName)}>{children}</div>
  </div>
)

/** Section heading in the "Agent Details / Detailed dossier…" style. */
export const SectionHeader = ({
  index,
  title,
  subtitle,
  count,
}: {
  index: string
  title: string
  subtitle?: string
  count?: number
}) => (
  <div className="mb-6 flex flex-col gap-1 sm:mb-8">
    <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-faint">
      <span className="h-1.5 w-1.5 bg-signal" />
      <span>{index}</span>
    </div>
    <h2 className="text-2xl text-fg sm:text-3xl">
      {title}
      {count !== undefined && <span className="ml-2 text-signal">({count})</span>}
    </h2>
    {subtitle && <p className="text-xs text-dim sm:text-sm">{subtitle}</p>}
  </div>
)

export const Tag = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn('border border-line bg-ink px-2 py-1 text-[11px] uppercase tracking-wide text-dim', className)}>
    {children}
  </span>
)

const buttonStyles = {
  primary: 'border-signal bg-signal-soft text-signal hover:bg-signal hover:text-ink',
  ghost: 'border-line-strong bg-panel-raised text-dim hover:border-fg hover:text-fg',
}

/** Angled-corner action chip. Renders an <a>. */
export const HudLink = ({
  variant = 'ghost',
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof buttonStyles }) => (
  <a
    {...props}
    className={cn(
      'hud-chip inline-flex items-center justify-center gap-2 border px-4 py-2.5 text-xs uppercase tracking-wide transition-colors',
      buttonStyles[variant],
      className,
    )}
  >
    {children}
  </a>
)
