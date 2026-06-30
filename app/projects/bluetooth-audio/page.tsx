import { ImageNote, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'DC Isolated Bluetooth Audio Adapter | Brayan Castaneda'
}

export default function BluetoothAudioPage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="practical electronics" title="DC Isolated Bluetooth Audio Adapter" summary="A car audio upgrade that solved an audible ground-loop problem with an isolated relay and battery system." image="/images/bluetooth.jpg" imageAlt="Bluetooth audio adapter" />

      <section className="mt-16 space-y-8">
        <TextBlock title="Much-needed Bluetooth upgrades">
          <p>
            This project came about when I decided to install a Bluetooth module into my car. I liked my existing head unit and only wanted wireless audio, so replacing the whole unit felt unnecessary.
          </p>
          <p>
            After installing the Bluetooth adapter and powering it from the car&apos;s 12V supply, there was an audible hum. A voltmeter showed stray voltage between audio ground and the 12V supply ground: a classic ground loop. Audio isolators reduced the issue but noticeably muted the sound.
          </p>
          <p>
            Unsatisfied with both approaches, I built a relay system that disconnected the Bluetooth adapter from the car&apos;s 12V power when the car turned on and switched it over to its own battery supply. That isolation let the audio signal pass without the ground loop or low-quality isolators.
          </p>
          <p>
            When the keys were off, the relay switched back to the car&apos;s 12V power so a charge controller could recharge the lithium battery pack. It also gave the module a clean on/off behavior tied to the car.
          </p>
        </TextBlock>

        <TextBlock title="Results">
          <p>
            The enhancement led to years of wireless audio use. If I rebuilt it now, I would likely design a dedicated circuit board and use an isolated DC supply instead of a dedicated battery system.
          </p>
        </TextBlock>

        <div className="grid gap-6 md:grid-cols-2">
          <ImageNote src="/images/bt1.jpg" caption="Prototype build to test triggering on and off from the car's ignition signal." />
          <ImageNote src="/images/bt4.jpg" caption="A version that worked until it released some magic smoke." />
          <ImageNote src="/images/bt3.jpg" caption="Evolution into a relay and battery system with battery protection and charging board." />
          <ImageNote src="/images/bt2.jpg" caption="Complete with a 4-channel relay for future additions." />
        </div>
      </section>
    </ProjectShell>
  )
}
