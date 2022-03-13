import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Profession from './components/profession/Profession'
import Portfolio from './components/portfolio/Portfolio'
import FunFacts from './components/fun facts/FunFacts'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Profession />
        <Portfolio />
        <FunFacts />
        <Contact />
        <Footer />
    </>
  )
}

export default App
