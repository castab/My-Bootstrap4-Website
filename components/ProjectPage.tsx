import Link from 'next/link'
import type { ReactNode } from 'react'
import { ExpandableImage } from './ExpandableImage'

type ProjectHeroProps = {
  eyebrow: string
  title: string
  summary: string
  image?: string
  imageAlt?: string
}

export function ProjectHero({ eyebrow, title, summary, image, imageAlt = '' }: ProjectHeroProps) {
  return (
    <header className="mt-8 grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">{eyebrow}</p>
        <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{summary}</p>
      </div>
      {image ? <ExpandableImage className="rounded-[2rem] border border-white/10 object-cover shadow-glow" src={image} alt={imageAlt} caption={title} /> : null}
    </header>
  )
}

export function ProjectShell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link className="text-sm font-semibold text-signal transition hover:text-white" href="/projects">
        Back to projects
      </Link>
      {children}
    </main>
  )
}

export function TextBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <h2 className="font-heading text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">{children}</div>
    </section>
  )
}

export function ImageNote({ src, caption, alt = '' }: { src: string; caption: string; alt?: string }) {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
      <ExpandableImage className="aspect-[16/10] w-full object-cover" src={src} alt={alt} caption={caption} />
      <figcaption className="p-5 text-sm leading-6 text-slate-300">{caption}</figcaption>
    </figure>
  )
}

export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
      <div className="aspect-video">
        <iframe className="h-full w-full" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}
