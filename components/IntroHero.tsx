import { ButtonLink, Container, MediaFrame } from './ui'

export function IntroHero() {
  return (
    <section className="lg:grid lg:min-h-[calc(100vh-73px)] lg:place-content-center">
      <Container className="grid gap-12 py-16 sm:py-24 md:grid-cols-2 md:items-center md:gap-8 lg:py-32">
        <div className="order-2 max-w-prose text-left md:order-1">
          <h1 className="intro-rise intro-delay-1 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <strong className="font-bold text-signal">Brayan</strong>.
          </h1>
          <p className="intro-rise intro-delay-2 mt-6 text-lg leading-8 text-pretty text-slate-300">
            I build practical software, thoughtful interfaces, and dependable systems shaped by a background in electrical engineering and hands-on problem solving.
          </p>
          <div className="intro-rise intro-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects">
              View notable work
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              About me
            </ButtonLink>
          </div>
        </div>
        <div className="intro-rise intro-delay-2 order-1 relative md:order-2">
          <div className="absolute -inset-6 rounded-[2rem] bg-signal/10 blur-3xl" />
          <MediaFrame className="relative">
            <img className="aspect-[4/5] w-full rounded-[1.4rem] object-cover" src="/images/me.jpg" alt="Brayan Castaneda" />
          </MediaFrame>
        </div>
      </Container>
    </section>
  )
}
