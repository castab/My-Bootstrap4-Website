import { ProjectCard } from '@/components/ProjectCard'
import { Container, PageIntro } from '@/components/ui'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects | Brayan Castaneda'
}

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <Container>
        <PageIntro eyebrow="notable work" title="Project notes, experiments, and engineering background." summary="A collection of software, embedded systems, and hardware projects that shaped how I think about practical engineering work." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  )
}
