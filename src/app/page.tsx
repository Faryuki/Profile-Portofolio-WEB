'use client';

import Navbar from '../app/components/Navbar'
import Hero from '../app/components/Hero'
import About from '../app/components/About'
import Skills from '../app/components/Skills'
import Projects from '../app/components/Projects'
import Contact from '../app/components/Contact'
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
