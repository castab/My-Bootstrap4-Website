import Link from 'next/link'

export function IntroHero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
      <div>
        <h1 className="intro-rise intro-delay-1 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Brayan.
        </h1>
        <p className="intro-rise intro-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I build practical software, thoughtful interfaces, and dependable systems shaped by a background in electrical engineering and hands-on problem solving.
        </p>
        <div className="intro-rise intro-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <Link className="rounded-full bg-signal px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-white" href="/projects">
            View notable work
          </Link>
          <Link className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10" href="/about">
            About me
          </Link>
        </div>
      </div>
      <div className="intro-rise intro-delay-2 relative">
        <div className="absolute -inset-6 rounded-[2rem] bg-signal/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel p-3 shadow-glow">
          <img className="aspect-[4/5] w-full rounded-[1.4rem] object-cover" src="/images/me.jpg" alt="Brayan Castaneda" />
        </div>
      </div>
    </section>
  )
}
