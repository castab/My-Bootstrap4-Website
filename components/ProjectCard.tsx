import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Badge, Card } from './ui'

export function ProjectCard({ project }: { project: Project }) {
  const card = (
    <Card as="article" className="group h-full" interactive>
      <div className="aspect-[16/10] overflow-hidden bg-slate-900">
        <img className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={project.image} alt={project.title} />
      </div>
      <div className="flex flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h2 className="font-heading text-2xl font-semibold text-white">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.summary}</p>
      </div>
    </Card>
  )

  return <Link href={`/projects/${project.slug}`}>{card}</Link>
}
