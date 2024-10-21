import Hero from '@/components/Hero/Hero'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

const index = () => {
  console.log('hello from server component')
  return (
    <>
      <Sidebar />
      <Hero />
    </>
  )
}

export default index