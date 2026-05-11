import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Code2, Users, Check, X, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const defaultApiBaseUrl = 'https://my-protfolio-backend-ke1g.onrender.com'
  const apiBaseUrl = import.meta.env.VITE_API_URL?.toString().replace(/\/$/, '') || defaultApiBaseUrl

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Trim inputs to avoid whitespace-only values
    const name = formData.name?.toString().trim()
    const email = formData.email?.toString().trim()
    const message = formData.message?.toString().trim()

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields')
      setShowError(true)
      setTimeout(() => setShowError(false), 4000)
      return
    }

    setIsSubmitting(true)
    setShowError(false)
    setShowSuccess(false)

    try {
      const endpoint = apiBaseUrl ? `${apiBaseUrl}/api/send-email` : '/api/send-email'

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const payload = await res.json().catch(() => ({}))
      if (!res.ok) {
        const msg = payload && (payload.error || payload.message)
          ? (payload.error || payload.message)
          : `Status ${res.status}`
        throw new Error(msg)
      }

      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setShowSuccess(false), 4000)
    } catch (error) {
      console.error('Server email send failed:', error)
      setErrorMessage(error && error.message ? `Failed to send message: ${error.message}` : 'Failed to send message — please try again later.')
      setShowError(true)
      setTimeout(() => setShowError(false), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something exceptional"
          description="Open for product collaborations, frontend consulting, and performance-focused web builds. Get in touch today!"
        />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Contact Methods */}
          <div className="space-y-4 lg:col-span-1">
            {/* Email */}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0 }}
              className="group"
              style={{ willChange: 'transform, opacity' }}
            >
              <GlassCard className="rounded-2xl p-4 transition hover:border-cyan-400/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 transition group-hover:bg-cyan-300/15">
                    <Mail size={20} className="text-cyan-300 transition group-hover:text-cyan-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-200">Email</h3>
                    <p className="mt-1 break-all text-xs text-cyan-300 transition group-hover:text-cyan-200">
                      {profile.email}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${profile.phone}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="group"
              style={{ willChange: 'transform, opacity' }}
            >
              <GlassCard className="rounded-2xl p-4 transition hover:border-cyan-400/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 transition group-hover:bg-cyan-300/15">
                    <Phone size={20} className="text-cyan-300 transition group-hover:text-cyan-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-200">Phone</h3>
                    <p className="mt-1 break-all text-xs text-cyan-300 transition group-hover:text-cyan-200">
                      {profile.phone}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/thippareddyvishnu390-sketch"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group"
            >
              <GlassCard className="rounded-2xl p-4 transition hover:border-cyan-400/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 transition group-hover:bg-cyan-300/15">
                    <Code2 size={20} className="text-cyan-300 transition group-hover:text-cyan-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-200">GitHub</h3>
                    <p className="mt-1 text-xs text-cyan-300 transition group-hover:text-cyan-200">
                      View my work
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/vishnu-vardhan-thippareddy-441648379"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group"
            >
              <GlassCard className="rounded-2xl p-4 transition hover:border-cyan-400/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 transition group-hover:bg-cyan-300/15">
                    <Users size={20} className="text-cyan-300 transition group-hover:text-cyan-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-200">LinkedIn</h3>
                    <p className="mt-1 text-xs text-cyan-300 transition group-hover:text-cyan-200">
                      Connect with me
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <GlassCard className="rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name Field */}
                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="min-h-11 w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-slate-900/70 focus:ring-1 focus:ring-cyan-300/20"
                    />
                  </motion.label>

                  {/* Email Field */}
                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      Email Address
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="min-h-11 w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-slate-900/70 focus:ring-1 focus:ring-cyan-300/20"
                    />
                  </motion.label>
                </div>

                {/* Message Field */}
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="block"
                >
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project, ideas, or questions..."
                    className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-slate-900/70 focus:ring-1 focus:ring-cyan-300/20"
                  />
                </motion.label>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition disabled:opacity-70 sm:w-auto"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="h-4 w-4 rounded-full border-2 border-slate-950/30 border-t-slate-950"
                          />
                          Sending...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          Send message
                          <Send size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              </form>
            </GlassCard>

            {/* Success Notification */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-300/50 bg-gradient-to-r from-emerald-300/10 to-teal-300/10 p-4 sm:p-5"
                >
                  <Check size={20} className="text-emerald-300" />
                  <div>
                    <p className="text-sm font-medium text-emerald-300">
                      Message sent successfully!
                    </p>
                    <p className="text-xs text-emerald-200/70">
                      I'll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Notification */}
            <AnimatePresence>
              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 flex items-center gap-3 rounded-xl border border-red-300/50 bg-gradient-to-r from-red-300/10 to-pink-300/10 p-4 sm:p-5"
                >
                  <X size={20} className="text-red-300" />
                  <div>
                    <p className="text-sm font-medium text-red-300">{errorMessage || 'Please fill in all fields'}</p>
                    <p className="text-xs text-red-200/70">{errorMessage ? '' : 'All fields are required to send your message.'}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
