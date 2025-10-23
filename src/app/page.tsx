import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Contact/Footer'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import FilterableProjects from '@/components/Projects/Projects'
import Sidebar from '@/components/Sidebar/Sidebar'
import SkillsSection from '@/components/Skill/SkillsSection'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <div className='bg-gray-900'>
          <title>Masud Rana - Frontend Software Developer</title>
          <meta name="description" content="This is a Next.js project" />
          <link rel="icon" href="/favicon.ico" />
        </div>
      </Head>
      <main>
        <Sidebar />
        <Hero />
        <SkillsSection />
        <Experience />
        <FilterableProjects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default index