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
    </>
  )
}

export default index