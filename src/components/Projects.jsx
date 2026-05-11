import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Work In Progress"
          description="I don't have public projects listed here yet — I'll add them when they're ready. In the meantime, reach out if you'd like to see samples or collaborate."
        />

        <GlassCard className="mt-6 p-8 text-center">
          <p className="text-lg font-semibold text-white">No projects to show yet</p>
          <p className="mt-3 text-sm text-slate-300">I update this section when projects are ready to share. If you'd like early access to code samples or demos, contact me.</p>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2 font-semibold text-slate-950">Contact Me</a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
