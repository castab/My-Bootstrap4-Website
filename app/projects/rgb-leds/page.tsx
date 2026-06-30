import { ImageNote, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'Addressable High-Power RGB LEDs | Brayan Castaneda'
}

export default function RgbLedsPage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="embedded hardware" title="Addressable High-Power RGB LEDs" summary="An early hardware project exploring how the addressable LED strip idea could scale into higher-powered RGB lighting with external current control." image="/images/ledstrip.jpg" imageAlt="High-power RGB LED strip project" />

      <section className="mt-16 space-y-8 text-base leading-8 text-slate-300">
        <TextBlock title="What made it interesting">
          <p>
            The original spark came from noticing how flexible low-power addressable LEDs had become and asking whether that same control pattern could apply to much brighter RGB emitters. The answer involved separating the logic signal from the power path and using MOSFETs to switch higher current loads from a lower-voltage control signal.
          </p>
        </TextBlock>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <ImageNote src="/images/schematic.jpg" alt="Project schematic notes" caption="Early schematic notes from the project." />
          <TextBlock title="Why keep it in the portfolio">
            <p>
              This is older work, but it still says something useful: I like translating a rough idea into a working physical system, and I enjoy the details where software intent meets electrical reality. Future revisions of this page can tighten the story around the engineering tradeoffs, failures, and what I would do differently now.
            </p>
          </TextBlock>
        </div>
      </section>
    </ProjectShell>
  )
}
