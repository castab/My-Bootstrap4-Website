import { ProjectHero, ProjectShell, TextBlock, VideoEmbed } from '@/components/ProjectPage'

export const metadata = {
  title: 'Wild West Shootout Game | Brayan Castaneda'
}

export default function WildWestShootoutPage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="pic microcontroller" title="Wild West Shootout Game" summary="A Spring 2015 microcontroller project that turned addressable LEDs and PIC assembly into a two-player reaction game." image="/images/microchip.jpg" imageAlt="PIC microcontroller project" />

      <section className="mt-16 space-y-8">
        <TextBlock title="Welcome to the Wild West">
          <p>
            In Spring 2015, two colleagues and I were tasked with making a project from a PIC microcontroller. Addressable LEDs were still relatively new to us, and the ESP8266 WiFi-enabled microcontroller was also starting to feel accessible. We decided to make a game out of it.
          </p>
          <p>
            After hundreds of lines of assembly code, with a 56-page report containing roughly 44 pages of code, we demonstrated a game where two players would face off and whoever reacted first would win.
          </p>
        </TextBlock>

        <VideoEmbed src="https://www.youtube.com/embed/QqMgE-rRKb4?start=295" title="Wild West Shootout presentation video" />
      </section>
    </ProjectShell>
  )
}
