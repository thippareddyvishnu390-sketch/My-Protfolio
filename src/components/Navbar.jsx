import { Code2, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const isMobile = useIsMobile()

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    [],
  )

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-42% 0px -42% 0px',
        threshold: 0.01,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  const handleNavClick = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 bg-slate-950/45 ${isMobile ? '' : 'backdrop-blur-xl'}`}>
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2 text-white"
          onClick={() => handleNavClick('#home')}
        >
          <span className="rounded-lg bg-cyan-400/20 p-2 text-cyan-300">
            <Code2 size={18} />
          </span>
          <span className="font-semibold tracking-wide transition group-hover:text-cyan-300">
            VISHNU.DEV
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="items-center gap-2 text-sm text-slate-200 md:flex lg:gap-2.5">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={isMobile ? {} : { y: -2 }}
              className={`rounded-full px-3 py-2.5 transition ${
                active === item.href
                  ? 'bg-cyan-300/20 text-cyan-200'
                  : 'text-slate-200 hover:bg-white/5 hover:text-cyan-300'
              }`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
            </motion.a>
          ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 p-2 text-slate-100"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: isMobile ? 0.15 : 0.25, ease: 'easeOut' }}
            className={`border-t border-white/10 bg-slate-900/75 px-4 py-4 ${isMobile ? '' : 'backdrop-blur-xl'} md:hidden`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={isMobile ? { opacity: 1 } : { opacity: 0, x: -8 }}
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : { delay: index * 0.03, duration: 0.2 }
                  }
                  className={`rounded-lg px-3 py-3 text-base transition ${
                    active === item.href
                      ? 'bg-cyan-300/20 text-cyan-200'
                      : 'text-slate-200 hover:bg-white/5 hover:text-cyan-300'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
