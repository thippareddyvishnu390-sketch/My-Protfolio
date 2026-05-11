import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react'
import GlassCard from './GlassCard'
import { profile, socialLinks } from '../data/portfolio'
import profileImage from './vishnu.jpg.jpeg'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="hero-gradient relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-4 py-16 sm:min-h-[calc(100svh-4rem)] sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-35" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.05 }
          }
          className="order-1 relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:order-2 lg:max-w-[28rem]"
        >
          <div className="relative" style={!prefersReducedMotion ? { willChange: 'transform' } : {}}>
            {!prefersReducedMotion && (
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
                style={{ willChange: 'transform' }}
              >
                <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.35)_0%,_rgba(45,212,191,0.18)_42%,_transparent_72%)] blur-2xl" />
              </motion.div>
            )}

            <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-[0_26px_65px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:p-4">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-full"
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.9),rgba(45,212,191,0.75),rgba(56,189,248,0.9),rgba(34,211,238,0.9))] opacity-80 blur-[2px]" />
                <div className="relative m-1 overflow-hidden rounded-full border border-white/30 bg-slate-900/20 aspect-square">
                  <img
                    src={profileImage}
                    alt="Vishnu profile portrait"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-center shadow-[0_20px_45px_rgba(2,6,23,0.45)]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/18 via-transparent to-cyan-200/8" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="relative z-10 order-2 lg:order-1"
        >
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
            Vishnu
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-200 bg-clip-text text-transparent">
              Full Stack &amp; Automation Developer
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-base lg:text-lg xl:text-xl">
            I build full-stack web applications, automation workflows with n8n,
            and integrate Git/GitHub workflows — exploring AI/ML as a beginner.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#resume"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Download Resume
              <Download size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20 sm:w-auto"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
            {socialLinks.map((link) => {
              const getIcon = (label) => {
                if (label === 'GitHub') {
                  return (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5a12 12 0 00-3.79 23.38c.6.12.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.79.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.94 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.55.12-3.23 0 0 1.01-.33 3.3 1.24a11.43 11.43 0 016 0c2.28-1.57 3.29-1.24 3.29-1.24.66 1.68.24 2.92.12 3.23.78.85 1.24 1.93 1.24 3.25 0 4.62-2.82 5.64-5.5 5.94.43.37.82 1.1.82 2.22v3.28c0 .32.22.7.83.58A12 12 0 0012 .5z" />
                    </svg>
                  )
                }
                if (label === 'LinkedIn') {
                  return (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  )
                }
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  {getIcon(link.label)}
                  {link.label}
                </a>
              )
            })}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }
          }
          className="relative z-10 order-3 lg:order-3"
        >
          <GlassCard className="relative overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-emerald-300/10" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                Focus Areas
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200 sm:text-base">
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Full Stack development (React, Node.js, Express)
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Git &amp; GitHub workflows, CI/CD and version control
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  n8n automation, integrations, and workflow orchestration
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Exploring AI/ML and generative AI (beginner level)
                </li>
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }
        }
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300 sm:inline-flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
