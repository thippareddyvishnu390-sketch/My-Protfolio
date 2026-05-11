import { motion } from 'framer-motion'
import { Star, GitFork, Eye, Code2, Calendar } from 'lucide-react'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { githubStats, topRepositories, codingActivity } from '../data/portfolio'

export default function GithubShowcase() {
  return (
    <section id="github" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="GitHub"
          title="Open source contributions"
          description="Active development presence with public repositories showcasing modern frontend practices and automation tools."
        />

        <div className="grid gap-5">
          <GlassCard className="rounded-2xl p-6">
            <h3 className="mb-2 text-base font-semibold text-white">GitHub details hidden</h3>
            <p className="text-sm text-slate-300">You chose to remove GitHub stats and repository details — they will be uploaded later.</p>
          </GlassCard>

          <GlassCard className="rounded-2xl p-6 mt-6">
            <h3 className="mb-2 text-base font-semibold text-white">Top repositories</h3>
            <p className="text-sm text-slate-300">No public repositories displayed. Upload data when ready.</p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
