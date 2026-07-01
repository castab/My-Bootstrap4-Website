import type { ReactNode } from 'react'
import { ExpandableImage } from './ExpandableImage'
import { ButtonLink, Card, Container, PageIntro } from './ui'

type ProjectHeroProps = {
  eyebrow: string
  title: string
  summary: string
  image?: string
  imageAlt?: string
}

export function ProjectHero({ eyebrow, title, summary, image, imageAlt = '' }: ProjectHeroProps) {
  return (
    <header className="mt-5 grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
      <PageIntro eyebrow={eyebrow} title={title} summary={summary} accent="copper" />
      {image ? <ExpandableImage className="rounded-[2rem] border border-white/10 object-cover shadow-glow" src={image} alt={imageAlt} caption={title} /> : null}
    </header>
  )
}

export function ProjectShell({ children }: { children: ReactNode }) {
  return (
    <main className="py-12 sm:py-16">
      <Container className="max-w-5xl">
        <ButtonLink href="/projects" variant="secondary">
          Back to projects
        </ButtonLink>
        {children}
      </Container>
    </main>
  )
}

export function TextBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card as="section" className="p-8">
      <h2 className="font-heading text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">{children}</div>
    </Card>
  )
}

export function ImageNote({ src, caption, alt = '' }: { src: string; caption: string; alt?: string }) {
  return (
    <Card as="figure">
      <ExpandableImage className="aspect-[16/10] w-full object-cover" src={src} alt={alt} caption={caption} />
      <figcaption className="p-5 text-sm leading-6 text-slate-300">{caption}</figcaption>
    </Card>
  )
}

export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <Card>
      <div className="aspect-video">
        <iframe className="h-full w-full" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </Card>
  )
}
