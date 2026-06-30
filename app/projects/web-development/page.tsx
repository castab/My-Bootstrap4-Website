import { ImageNote, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'Front-End Development Experiments | Brayan Castaneda'
}

export default function WebDevelopmentPage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="web foundations" title="Front-End Development Experiments" summary="Early web work that connected embedded interfaces, PHP-backed pages, AngularJS, and the realization that user interfaces could be serious engineering surfaces." image="/images/frontend.jpg" imageAlt="Frontend development project card image" />

      <section className="mt-16 space-y-8">
        <TextBlock title="The beginnings">
          <p>
            My first experience with web development came from tinkering with the ESP8266 WiFi-enabled microcontroller. Before I knew what APIs were, my default interface with the microcontroller was a very simple website with a dialog and a dropdown that could turn one of its IO pins high or low and trigger an attached relay.
          </p>
          <p>
            Later, I found a beginner PHP course and was surprised by how much could be done with server-side processing and persistent storage such as SQL. That became the first bridge between simple pages and actual data-backed tools.
          </p>
          <p>
            Over time, I picked up a good chunk of HTML and CSS, but the biggest leap came during my Target internship. AngularJS made data binding and session-driven interfaces click in a way static pages had not.
          </p>
        </TextBlock>

        <TextBlock title="Student of the web">
          <p>
            This older site came from the same curiosity: how do strong websites feel polished, responsive, and useful? At the time, the answer felt like a combination of careful CSS, JavaScript, and a willingness to keep iterating on the interface.
          </p>
        </TextBlock>

        <div className="grid gap-6 md:grid-cols-2">
          <ImageNote src="/images/web3.jpg" caption="A website for my dad's trucking company." />
          <ImageNote src="/images/web2.jpg" caption="A PHP endpoint used to feed a site current weather information." />
        </div>
      </section>
    </ProjectShell>
  )
}
