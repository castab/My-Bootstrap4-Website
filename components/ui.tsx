import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type WithChildren = {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: WithChildren) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6', className)}>{children}</div>
}

type ButtonLinkProps = WithChildren & {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function ButtonLink({ children, className = '', href, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-ink',
        variant === 'primary' && 'bg-signal text-ink hover:bg-white',
        variant === 'secondary' && 'border border-white/15 text-white hover:border-white/40 hover:bg-white/10',
        variant === 'ghost' && 'px-0 py-0 text-signal hover:text-white focus:ring-offset-0',
        className
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

export function Badge({ children, className = '' }: WithChildren) {
  return <span className={cn('rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300', className)}>{children}</span>
}

type CardProps = WithChildren & {
  as?: 'article' | 'section' | 'figure' | 'div'
  interactive?: boolean
}

export function Card({ as: Component = 'div', children, className = '', interactive = false }: CardProps) {
  return (
    <Component
      className={cn(
        'overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]',
        interactive && 'shadow-glow transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-white/[0.07]',
        className
      )}
    >
      {children}
    </Component>
  )
}

export function MediaFrame({ children, className = '' }: WithChildren) {
  return <div className={cn('overflow-hidden rounded-[2rem] border border-white/10 bg-panel p-3 shadow-glow', className)}>{children}</div>
}

type PageIntroProps = {
  eyebrow: string
  title: string
  summary: string
  accent?: 'signal' | 'copper'
  className?: string
}

export function PageIntro({ eyebrow, title, summary, accent = 'signal', className = '' }: PageIntroProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className={cn('text-sm font-semibold uppercase tracking-[0.28em]', accent === 'copper' ? 'text-copper' : 'text-signal')}>{eyebrow}</p>
      <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white">{title}</h1>
      <p className="mt-6 text-lg leading-8 text-slate-300">{summary}</p>
    </div>
  )
}
