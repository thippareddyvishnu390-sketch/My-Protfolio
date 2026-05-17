import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))
import Footer from './components/Footer'
import { useIsMobile } from './hooks/useIsMobile'

function App() {
  // reduce heavy backdrop on small screens for better performance
  const isMobile = useIsMobile()
  return (
    <div className="app-shell relative min-h-screen bg-slate-950 text-white">
      <div className={`app-backdrop pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_34%),radial-gradient(circle_at_85%_80%,_rgba(45,212,191,0.12),_transparent_28%)] ${isMobile ? 'opacity-30' : ''}`} />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div />}> 
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
