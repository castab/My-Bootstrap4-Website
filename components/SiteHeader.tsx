import Link from 'next/link'
import { GitHubIcon } from './GitHubIcon'
import { Container } from './ui'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav>
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="font-heading text-sm font-semibold tracking-[0.18em] text-slate-100">
            Brayan Castaneda
          </Link>
          <div className="flex items-center gap-5 text-sm text-slate-300">
            <Link className="transition hover:text-white" href="/projects">
              Projects
            </Link>
            <Link className="transition hover:text-white" href="/about">
              About
            </Link>
            <a className="text-slate-400 transition hover:text-white" href="https://github.com/castab/showcase" aria-label="GitHub source">
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </Container>
      </nav>
    </header>
  )
}
