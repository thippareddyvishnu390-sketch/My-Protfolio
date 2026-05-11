import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-10"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
        {description}
      </p>
    </motion.div>
  )
}
