import { motion } from 'framer-motion'
import {
  Globe,
  Container,
  Cloud,
  Workflow,
  Rocket,
  Bot,
  Code,
  Send,
  Sparkles,
} from 'lucide-react'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

const interests = [
  { label: 'Web Development', icon: Globe },
  { label: 'Docker', icon: Container },
  { label: 'Cloudflare', icon: Cloud },
  { label: 'n8n', icon: Workflow },
  { label: 'Deployment', icon: Rocket },
  { label: 'AI Automation', icon: Bot },
  { label: 'Vibe Coding', icon: Sparkles },
]

// stats removed by request — not displayed

const vibe = [
  { label: 'Focus Sessions', desc: '25–90 minute deep work', icon: Code },
  { label: 'Clean Commits', desc: 'Small, descriptive commits', icon: Send },
  { label: 'Playlists', desc: 'Lo-fi / Synth / Instrumental', icon: Sparkles },
  { label: 'Pair & Review', desc: 'Peer review & quick pairing', icon: Workflow },
  { label: 'Automation First', desc: 'Automate repetitive dev tasks', icon: Bot },
]

export default function About() {
  return (
    <section id="about" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="I build elegant products and productive developer flows"
          description="Full-stack engineer focused on polished interfaces, reliable automation (n8n), and Git-first workflows — exploring AI/ML to add smarter features to real products."
        />

        <div className="grid gap-5">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <GlassCard className="h-full rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Practical engineering, delightful experiences
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                I ship production-ready web apps and automation workflows that
                reduce manual work and scale reliably. I care about clear
                architecture, fast UIs, and Git-centric collaboration. Recently
                I’ve been exploring generative AI to add smarter features.
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/85">
                  What I work on
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Full-stack apps with React & Node.js</li>
                  <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Automation & integrations using n8n</li>
                  <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Version control & CI/CD (GitHub)</li>
                  <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Containerized deployments and observability</li>
                </ul>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/85">
                  Vibe Coding
                </p>
                <div className="space-y-3">
                  {vibe.map((v, i) => {
                    const Icon = v.icon
                    return (
                      <motion.div
                        key={v.label}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.28, delay: i * 0.04 }}
                        className="flex items-start gap-3"
                      >
                        <span className="rounded-lg border border-white/10 bg-white/5 p-2 text-cyan-300">
                          <Icon size={16} />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-white">{v.label}</p>
                          <p className="mt-1 text-xs text-slate-400">{v.desc}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right column removed per user request (no stats to display) */}
        </div>
      </div>
    </section>
  )
}
