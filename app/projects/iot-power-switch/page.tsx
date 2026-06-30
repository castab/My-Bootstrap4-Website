import { ImageNote, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'IoT Remote Power Switch | Brayan Castaneda'
}

export default function IotPowerSwitchPage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="iot experiment" title="IoT Remote Power Switch" summary="A small ESP8266-powered control surface for switching a desk lamp from another internet-connected device." image="/images/iot.jpg" imageAlt="IoT remote power switch" />

      <section className="mt-16 grid gap-6 md:grid-cols-[1fr_1fr] md:items-start">
        <TextBlock title="Remote control, small hardware">
          <p>
            This project used an ESP8266 microprocessor as the small network-connected piece in a simple remote power switch. The original write-up was intentionally sparse, but it still marks an important thread in my work: using tiny pieces of hardware to create practical interfaces in the physical world.
          </p>
          <p>
            The ESP8266 was compelling because it was about the size of a quarter while still packing onboard WiFi, a faster processor, and more memory than many Arduino boards I had used before.
          </p>
        </TextBlock>
        <ImageNote src="/images/iot1.jpg" caption="The ESP8266 made small WiFi-enabled control projects approachable." />
      </section>
    </ProjectShell>
  )
}
