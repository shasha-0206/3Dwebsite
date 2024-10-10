import './index.css';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Highlight from './components/Highlight.jsx'
import Model from './components/Model.jsx'
import Features from './components/Features.jsx';
import Chip from './components/Chip.jsx';
import Footer from './components/Footer.jsx';


import * as Sentry from '@sentry/react'
function App() {
  
  return (
    <main className = "bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
