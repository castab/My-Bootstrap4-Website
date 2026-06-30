import Link from 'next/link'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  const card = (
    <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-glow transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-white/[0.07]">
      <div className="aspect-[16/10] overflow-hidden bg-slate-900">
        <img className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={project.image} alt="" />
      </div>
      <div className="flex min-h-72 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-heading text-2xl font-semibold text-white">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.summary}</p>
        <p className="mt-6 text-sm font-medium text-signal">Read project notes</p>
      </div>
    </article>
  )

  return <Link href={`/projects/${project.slug}`}>{card}</Link>
}
