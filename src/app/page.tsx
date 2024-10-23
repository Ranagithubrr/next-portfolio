import Clients from '@/components/Clients/Clients'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import FilterableProjects from '@/components/Projects/Projects'
import Sidebar from '@/components/Sidebar/Sidebar'
import SkillsSection from '@/components/Skill/SkillsSection'
import React from 'react'

const index = () => {
  return (
    <>
      <Sidebar />
      <Hero />
      <SkillsSection />
      <Experience />
      <Clients />
      <FilterableProjects />
      <Contact />
    </>
  )
}

export default index