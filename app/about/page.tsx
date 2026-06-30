import { ImageNote, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'About | Brayan Castaneda'
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <header className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">about</p>
          <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white">Putting a face behind the work.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A mix of electrical engineering roots, software curiosity, and a long-running preference for practical systems that help people get something done.
          </p>
        </div>
        <img className="rounded-[2rem] border border-white/10 object-cover shadow-glow" src="/images/aboutMe.jpg" alt="Brayan Castaneda in Minneapolis" />
      </header>

      <section className="mt-16 space-y-8">
        <TextBlock title="Why engineering">
          <p>
            I worked retail for most of my early working life and eventually found it unfulfilling. I enjoyed my coworkers, but the work became repetitive, and I wanted a path that pushed me intellectually and consciously.
          </p>
          <p>
            A few years in engineering school changed how I saw the physical world. One of the biggest leaps for me was learning the Fourier Transform and seeing how powerful mathematical tools could explain real signals and systems.
          </p>
          <p>
            I graduated from California State University, Fresno with a degree in Electrical Engineering and a minor in Computer Engineering. That combination still shapes how I approach software: interfaces matter, but so do the systems underneath them.
          </p>
        </TextBlock>

        <div className="grid gap-6 md:grid-cols-3">
          <ImageNote src="/images/pupper.jpg" caption="My pupper joining me on a trip." />
          <ImageNote src="/images/seattle.jpg" caption="Sightseeing in Seattle." />
          <ImageNote src="/images/vancouver.jpg" caption="Definitely have to return to Vancouver sometime." />
        </div>

        <TextBlock title="Values">
          <p>
            I come from a family of immigrants. Both of my parents came from Mexico in search of their own American Dream, and they became business owners in the trucking industry. From them, I learned the value of hard work and a person&apos;s word.
          </p>
          <p>
            I care deeply about the people close to me, including family, friends, and colleagues, and I try to help them the way they have helped me. Those bonds have shaped who I am as much as any technical project has.
          </p>
        </TextBlock>

        <ImageNote src="/images/duck.jpg" caption="Celebrating the end of a tough semester at a local brewery across from campus." />
      </section>
    </main>
  )
}
