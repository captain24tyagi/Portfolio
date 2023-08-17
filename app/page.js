'use client'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Workexperience from '../components/Workexperience'


export default function Home() {
  return (
    <div className='h-screen overflow-y-scroll overflow-x-hidden z-0 bg-black text-white
   snap-y snap-mandatory scrollbar scrollbar-track-black/20 scrollbar-thumb-[#FB923C]'>
      <Head>
        <title>Sarthak Tyagi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='profile' className='snap-start'>
        <Profile />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='workexperience' className='snap-center'>
        <Workexperience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </div>
  )
}
