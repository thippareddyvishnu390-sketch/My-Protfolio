import { Award, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Certifications"
          title="Professional credentials"
          description="Industry-recognized certifications validating expertise in web development, containerization, version control, and cloud platforms."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <GlassCard className="group h-full overflow-hidden rounded-2xl p-0">
                <div className="relative h-44 overflow-hidden bg-white/5">
                  {cert.verifyUrl && String(cert.verifyUrl).toLowerCase().endsWith('.pdf') ? (
                    <object
                      data={cert.verifyUrl}
                      type="application/pdf"
                      aria-label={cert.title}
                      className="h-full w-full bg-transparent"
                      >
                      <div className="flex h-full w-full items-center justify-center bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 2h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                          <path d="M13 3v5h5" fillOpacity="0.15" />
                        </svg>
                      </div>
                    </object>
                  ) : (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                </div>

                <div className="flex flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-300">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="rounded-lg border border-white/15 bg-white/5 p-2 text-cyan-300">
                      <Award size={16} />
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {cert.issuedDate}
                    </p>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-300/20 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-300/30 hover:text-cyan-200"
                    >
                      Verify
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
