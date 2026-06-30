import { ImageNote, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'Call Log Management Center | Brayan Castaneda'
}

export default function CallLogManagementPage() {
  return (
    <ProjectShell>
      <ProjectHero eyebrow="php and mysql" title="Call Log Management Center" summary="My first serious data-driven web tool, built to replace a slow Microsoft Access workflow with a browser-based PHP and MySQL application." image="/images/phpsql.png" imageAlt="PHP and SQL project card image" />

      <section className="mt-16 space-y-8">
        <TextBlock title="Why it existed">
          <p>
            I had wanted to build my own website, but this project gave me a concrete reason: a local business needed help replacing a slow database based on Microsoft Access. I opted to build a SQL-backed database presented through a webpage, which allowed users to enter and view data from any computer on the local intranet and, if desired, from the internet.
          </p>
        </TextBlock>

        <TextBlock title="PHP, SQL, and input validation">
          <p>
            PHP made it possible to persist useful state across browser windows during a user&apos;s session. A strong input validation system became one of the most important parts of the project because entries had to be correct before they could be sorted, displayed, and edited reliably.
          </p>
          <p>
            The combination of PHP and SQL also supported a username and password login system so entries could be logged by user. PHP&apos;s built-in hashing functions allowed hashed passwords to be stored without exposing the original password value.
          </p>
        </TextBlock>

        <div className="grid gap-6 md:grid-cols-2">
          <ImageNote src="/images/clmc1.jpg" caption="Login landing page." />
          <ImageNote src="/images/clmc2.jpg" caption="Password recovery flow." />
          <ImageNote src="/images/clmc3.jpg" caption="After login, the menu changes to reflect read/write privileges." />
          <ImageNote src="/images/clmc4.jpg" caption="A table view of recent entries, with date links leading to edit forms." />
          <ImageNote src="/images/clmc5.jpg" caption="An edit form for an entry." />
          <ImageNote src="/images/clmc6.jpg" caption="HTML5 helped with form validation, but server-side validation still guarded storage." />
        </div>

        <ImageNote src="/images/clmc7.jpg" caption="A peek into the code. The original project was not published publicly because it was live and in use." />
      </section>
    </ProjectShell>
  )
}
