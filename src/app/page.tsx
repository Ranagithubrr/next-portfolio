import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
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
    </>
  )
}

export default index