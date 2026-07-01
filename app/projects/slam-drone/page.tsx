import { ProjectHero, ProjectShell, TextBlock, VideoEmbed } from '@/components/ProjectPage'

export const metadata = {
  title: 'SLAM Drone Senior Project | Brayan Castaneda'
}

export default function SlamDronePage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="senior project" title="SLAM Drone Senior Project" summary="A California State University, Fresno senior design project exploring autonomous navigation, mapping, and machine vision concepts." image="/images/slam.jpg" imageAlt="SLAM drone project" />

      <section className="mt-16 space-y-8">
        <TextBlock title="Introduction">
          <p>
            As our senior design project, our group chose to work with a SLAM algorithm and run it on a drone. Deep learning was part of the intended navigation approach, giving the system a way to make better decisions based on training data.
          </p>
          <p>
            The project was the culmination of our undergraduate engineering education and was presented for Fresno State Projects Day in May 2018.
          </p>
        </TextBlock>

        <TextBlock title="Synopsis">
          <p>
            Our group liked drones, computers, and automation, so we wanted a project that combined those interests into a meaningful challenge. After attending a drone conference in Las Vegas, we set our sights on creating something that integrated navigation, mapping, and machine learning.
          </p>
          <p>
            The concept coupled Jetson&apos;s computing capabilities with Intel RealSense sensing to create an autonomous system that could operate in a given environment while mapping its location. We planned to start with 2D navigation using a ground-based rover before expanding into a flying drone.
          </p>
          <p>
            It was a year-long project that went beyond putting a couple of sensors together. It became a shared engineering effort across hardware, software, sensing, and controls.
          </p>
        </TextBlock>

        <VideoEmbed src="https://www.youtube.com/embed/03r56SdhQwA" title="SLAM drone presentation video" />
      </section>
    </ProjectShell>
  )
}
