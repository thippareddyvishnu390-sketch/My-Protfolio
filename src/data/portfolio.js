import { Code, GitBranch, Users, Globe, Workflow, Sparkles, Cloud } from 'lucide-react'
import IBMPdf from '../assets/certs/IBMDesign20260125-31-kfg1r4 (1).pdf'
import GenAIPdf from '../assets/certs/GettingStartedwithGenerativeAI_Badge20260216-35-z3bdai (1).pdf'

export const profile = {
  name: 'Vishnu',
  role: 'Full Stack & Automation Developer',
  summary:
    'I design and build polished, high-performance web products with clean architecture, thoughtful interactions, and production quality code.',
  location: 'India',
  email: 'thippareddyvishnu390@gmail.com',
  phone: '+91 8121380186',
  availability: 'Open to freelance and full-time opportunities',
}

export const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Delivered', value: '26' },
  { label: 'Client Satisfaction', value: '98%' },
]

export const skillsCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 90 },
      { name: 'JavaScript', proficiency: 92 },
      { name: 'React.js', proficiency: 94 },
      { name: 'Tailwind / UI Design', proficiency: 88 },
      { name: 'Responsive Design', proficiency: 90 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', proficiency: 86 },
      { name: 'Express', proficiency: 82 },
      { name: 'Python', proficiency: 70 },
      { name: 'MongoDB', proficiency: 78 },
      { name: 'REST APIs', proficiency: 88 },
    ],
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'GitHub', proficiency: 92 },
      { name: 'GitHub Actions', proficiency: 78 },
      { name: 'Docker', proficiency: 85 },
    ],
  },
  {
    category: 'Automation & Integrations',
    skills: [
      { name: 'n8n', proficiency: 86 },
      { name: 'Workflow Integrations', proficiency: 83 },
      { name: 'API Integration', proficiency: 84 },
    ],
  },
]

export const projects = []

export const certifications = [
  {
    id: 1,
    title: 'IBM Design Certificate',
    issuer: 'IBM',
    issuedDate: 'Jan 2026',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    verifyUrl: IBMPdf,
  },
  {
    id: 2,
    title: 'Getting Started with Generative AI',
    issuer: 'Coursera / Google',
    issuedDate: 'Feb 2026',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
    verifyUrl: GenAIPdf,
  },
]

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'University of Technology',
    year: '2020',
    description: 'Focused on web development, databases, and software engineering principles.',
  },
  {
    degree: 'Full Stack Web Development Bootcamp',
    school: 'Code Academy',
    year: '2021',
    description: 'Intensive training in React, Node.js, and modern web development practices.',
  },
]

export const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc',
    period: '2023 - Present',
    description: 'Leading frontend architecture for enterprise SaaS applications with React and Tailwind CSS.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    period: '2021 - 2023',
    description: 'Built and maintained full-stack applications using React, Node.js, and PostgreSQL.',
  },
  {
    role: 'Junior Developer',
    company: 'Startup Hub',
    period: '2020 - 2021',
    description: 'Developed responsive web applications and learned agile development practices.',
  },
]

export const resumeSummary = {
  title: 'Professional Summary',
  content:
    'Full Stack & Automation Developer with 4+ years building production web applications and automation workflows. Core strengths include frontend engineering with React, backend services with Node.js, CI/CD and Docker-based deployments, and workflow automation using n8n. Currently exploring generative AI and ML integrations to add intelligent features to products.\n\nKey skills: React, Node.js, Express, n8n, Docker, Git & GitHub, Vercel, Cloudflare, basic ML/Generative AI.\n\nAvailable for freelance and full-time roles; I focus on clear architecture, maintainable code, and automations that reduce repetitive work.',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/thippareddyvishnu390-sketch' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishnu-vardhan-thippareddy-441648379' },
]

export const githubStats = [
  {
    label: 'Public Repositories',
    value: '28',
    icon: Code,
  },
  {
    label: 'Total Stars',
    value: '1.2K',
    icon: GitBranch,
  },
  {
    label: 'Followers',
    value: '340',
    icon: Users,
  },
]

export const topRepositories = [
  {
    name: 'React Portfolio',
    language: 'React + Tailwind',
    description: 'Modern portfolio website built with React, Vite, and Tailwind CSS with glassmorphism UI.',
    stars: '142',
    forks: '28',
    url: 'https://github.com/',
  },
  {
    name: 'n8n Automation Hub',
    language: 'n8n + Node.js',
    description: 'Collection of workflow automations and integrations using n8n platform.',
    stars: '89',
    forks: '15',
    url: 'https://github.com/',
  },
  {
    name: 'Docker DevTools',
    language: 'Docker + Bash',
    description: 'Containerized development environment setup scripts and configurations.',
    stars: '56',
    forks: '12',
    url: 'https://github.com/',
  },
  {
    name: 'AI Chat Assistant',
    language: 'React + OpenAI',
    description: 'Real-time chat application powered by OpenAI API with streaming responses.',
    stars: '234',
    forks: '42',
    url: 'https://github.com/',
  },
]

export const services = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Build production-ready web applications from frontend to backend, focused on performance and maintainability.',
    features: ['React.js & Tailwind', 'Node.js & Express', 'REST API design', 'Responsive & accessible UIs'],
    icon: Code,
  },
  {
    id: 2,
    title: 'Automation & Integrations',
    description: 'Automate workflows and integrate services to reduce manual effort and improve reliability.',
    features: ['n8n workflow design', 'API integrations', 'Data synchronization', 'Error handling & retries'],
    icon: Workflow,
  },
  {
    id: 3,
    title: 'DevOps & Deployment',
    description: 'Containerization, CI/CD, and platform deployments to ship and operate applications.',
    features: ['Docker containerization', 'Vercel & platform deployment', 'CI/CD pipelines', 'Cloudflare CDN'],
    icon: Cloud,
  },
  {
    id: 4,
    title: 'AI & ML Prototyping',
    description: 'Prototype AI-powered features and integrate generative models into applications (beginner to intermediate).',
    features: ['Generative AI & prompting', 'OpenAI integrations', 'Data preprocessing', 'Proof-of-concept models'],
    icon: Sparkles,
  },
  {
    id: 5,
    title: 'Developer Workflows',
    description: 'Improve team productivity with Git-first workflows, clear commits, and automation.',
    features: ['Git & GitHub', 'Branching strategies', 'GitHub Actions', 'Code review best practices'],
    icon: Globe,
  },
]

export const codingActivity = [
  { day: 'Monday', commits: 8 },
  { day: 'Tuesday', commits: 12 },
  { day: 'Wednesday', commits: 15 },
  { day: 'Thursday', commits: 10 },
  { day: 'Friday', commits: 14 },
  { day: 'Saturday', commits: 6 },
  { day: 'Sunday', commits: 3 },
]
