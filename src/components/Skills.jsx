import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { skillsCategories } from '../data/portfolio'

function ProgressBar({ proficiency }) {
  return (
    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-cyan-400 to-teal-300"
        style={{ willChange: 'width' }}
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Core skills and tools"
          description="Full Stack development, Git & GitHub, n8n automation, Docker deployments, and beginner-level AI/ML experience."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillsCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <GlassCard className="h-full rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                <div className="mt-4 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.08 + skillIndex * 0.04 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-100 transition group-hover:text-cyan-300">{skill.name}</p>
                        <span className="text-xs text-slate-400">{skill.proficiency}%</span>
                      </div>
                      <ProgressBar proficiency={skill.proficiency} />
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
