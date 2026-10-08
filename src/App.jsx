import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Ceo from './components/Ceo'
import Story from './components/Story'
import MissionVision from './components/MissionVision'
import Services from './components/Services'
import Highlights from './components/Highlights'
import Team from './components/Team'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Fade elements marked with data-reveal in as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Ceo />
        <Story />
        <MissionVision />
        <Services />
        <Highlights />
        <Team />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
