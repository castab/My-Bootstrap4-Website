import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects | Brayan Castaneda'
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">notable work</p>
        <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white">Project notes, experiments, and engineering background.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          A collection of software, embedded systems, and hardware projects that shaped how I think about practical engineering work.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}
