import { motion } from 'framer-motion'
import { ArrowUpRight, CircleUserRound, Code2, AtSign } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

const iconMap = {
  GitHub: Code2,
  LinkedIn: CircleUserRound,
  X: AtSign,
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,_rgba(56,189,248,0.09),_transparent_35%),radial-gradient(circle_at_88%_88%,_rgba(45,212,191,0.08),_transparent_30%)]" />

      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-950/75 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.38)] backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Quick Navigation</p>
            <nav className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {quickLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.28, delay: index * 0.03 }}
                  className="group inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  {item.label}
                  <ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" />
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Connect</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialLinks.map((item, index) => {
                const Icon = iconMap[item.label] ?? Code2
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    whileHover={{ y: -2, scale: 1.03 }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.28, delay: index * 0.05 }}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-300"
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div className="md:justify-self-end">
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300/15 md:w-auto"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUpRight size={15} />
            </motion.button>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-4 text-center md:text-left">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Vishnu. Crafted with React, motion, and detail.</p>
        </div>
      </div>
    </footer>
  )
}
