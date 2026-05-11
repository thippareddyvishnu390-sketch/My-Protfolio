import { Download, FileText, Briefcase, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { education, experience, resumeSummary } from '../data/portfolio'
import profileImage from './vishnu.jpg.jpeg'
import { useCallback, useMemo } from 'react'

function TimelineItem({ icon: Icon, title, subtitle, period, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="rounded-full border border-white/20 bg-cyan-400/10 p-2 text-cyan-300">
          <Icon size={16} />
        </div>
        <div className="mt-2 h-12 w-0.5 bg-gradient-to-b from-cyan-300/40 to-transparent last:hidden" />
      </div>
      <div className="flex-1 pt-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">{period}</p>
        <h4 className="mt-1 text-base font-semibold text-white">{title}</h4>
        <p className="mt-0.5 text-sm text-slate-400">{subtitle}</p>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Resume() {
  const htmlTemplate = useMemo(() => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vishnu Vardhan Reddy Thippareddy - Resume</title>
<style>
  /* Minimal inline styles copied from provided template */
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:Georgia, 'Times New Roman', serif;background:#fff;color:#222}
  .resume{display:flex;min-height:100vh}
  .sidebar{width:260px;background:#1a4a3a;color:#fff;padding:36px 24px}
  .profile-photo{width:80px;height:80px;border-radius:50%;overflow:hidden;margin-bottom:18px;background:#2d6e58}
  .profile-photo img{width:100%;height:100%;object-fit:cover}
  .sidebar h1{font-size:20px;font-weight:bold;text-align:center;line-height:1.3;margin-bottom:10px}
  .divider{width:40px;height:2px;background:#7ab8a0;margin:10px auto}
  .title{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#b2d8cc;text-align:center;margin-bottom:28px}
  .sidebar-section{margin-bottom:24px}
  .sidebar-section h2{font-size:14px;font-weight:bold;color:#fff;margin-bottom:10px}
  .sidebar-section p,.sidebar-section a{font-size:12.5px;color:#cce6df;line-height:1.7}
  .sidebar-section a{color:#7ad4bb;word-break:break-all}
  .skill-bar{height:4px;border-radius:2px;background:#2d6e58;overflow:hidden}
  .skill-bar-fill{height:100%;background:linear-gradient(90deg,#7ad4bb,#4ab89a)}
  .main{flex:1;padding:40px 48px;background:#fff}
  .section-title{font-size:22px;font-weight:bold;color:#1a1a1a;margin-bottom:10px;margin-top:30px}
  .profile-text{font-size:13.5px;color:#333;line-height:1.75}
  .exp-title{font-size:15px;font-weight:bold;color:#1a1a1a;margin-top:14px;margin-bottom:2px}
  .exp-date{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#888;margin-bottom:8px}
  .exp-desc{font-size:13.5px;color:#333;line-height:1.75}
  .edu-list{list-style:disc;padding-left:20px;margin-top:4px}
  .edu-list li{font-size:13.5px;color:#333;line-height:1.7;margin-bottom:10px}
</style>
</head>
<body>
<div class="resume">
  <div class="sidebar">
    <div class="profile-photo"><img src="${profileImage}" alt="profile"/></div>
    <h1>Vishnu Vardhan<br/>Reddy<br/>Thippareddy</h1>
    <div class="divider"></div>
    <div class="title">Full Stack Developer</div>
    <div class="sidebar-section">
      <h2>Personal Details</h2>
      <p>Pulivendula</p>
      <p>Kadapa</p>
      <p>India</p>
      <a href="tel:8121380186">8121380186</a>
      <a href="mailto:thippareddyvishnu390@gmail.com">thippareddyvishnu390@gmail.com</a>
    </div>
    <div class="sidebar-section">
      <h2>Skills</h2>
      <div class="skills-text">Full Stack Developer, Artificial Intelligence, Machine Learning, N8N Automation, AI Integrations</div>
      <div class="skill-bar"><div class="skill-bar-fill" style="width:55%"></div></div>
    </div>
  </div>
  <div class="main">
    <div class="section-title">Profile</div>
    <p class="profile-text">${resumeSummary.content}</p>
    <div class="section-title">Professional Experience</div>
    <div class="exp-title">Full Stack Development , AI &amp; ML, Student, Hyderabad</div>
    <div class="exp-date">AUG 2025 — MAY 2029</div>
    <p class="exp-desc">Passionate Full Stack Developer and AI/ML student with skills in building responsive web applications, REST APIs, and modern user interfaces using technologies like React.js, Node.js, Express.js, and databases.</p>
    <div class="section-title">Education</div>
    <div class="edu-title">B.Tech, Malla Reddy University Hyderabad, Hyderabad</div>
    <div class="edu-date">AUG 2025 — MAY 2029</div>
    <ul class="edu-list">
      <li>
        <strong>Bachelor of Technology – Pursuing</strong>
        <span class="inst">Malla Reddy University</span>
        <span class="desc">Currently pursuing B.Tech with interest in Full Stack Development, Artificial Intelligence, and Machine Learning.</span>
      </li>
    </ul>
  </div>
</div>
</body>
</html>`
  , [resumeSummary.content])

  const downloadResume = useCallback(async () => {
    try {
      // fetch the profile image and convert to base64 so exported HTML contains the image
      const res = await fetch(profileImage)
      const blob = await res.blob()
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64data = reader.result
        const html = htmlTemplate.replace(new RegExp(profileImage, 'g'), base64data)
        const blobHtml = new Blob([html], { type: 'text/html' })
        const url = URL.createObjectURL(blobHtml)
        const a = document.createElement('a')
        a.href = url
        a.download = 'Vishnu_Resume.html'
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
      }
      reader.readAsDataURL(blob)
    } catch (err) {
      console.error('Failed to generate resume download', err)
      alert('Failed to prepare resume download. Check console for details.')
    }
  }, [htmlTemplate])

  return (
    <section id="resume" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Resume"
          title="Professional background"
          description="Career trajectory, education, and professional development focused on modern web development and automation systems."
        />

        <div className="grid gap-5">
          <div className="flex items-center gap-6">
            <div className="rounded-full overflow-hidden w-24 h-24 border border-white/10">
              <img src={profileImage} alt="Vishnu profile" className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Vishnu</h2>
              <p className="text-sm text-slate-300 mt-1">Full Stack &amp; Automation Developer</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <GlassCard className="rounded-2xl p-6 sm:p-7">
              <h3 className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan-300/85">
                Professional Summary
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                {resumeSummary.content}
              </p>
            </GlassCard>

            <GlassCard className="rounded-2xl p-6 sm:p-7">
              <button
                onClick={downloadResume}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Download CV
                <Download size={14} />
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
