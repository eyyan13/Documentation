import React from 'react'
import Hero from '@/components/Hero'
import CarGrid from '@/components/CarGrid'



export default async function Home() {


  return (
    <main>
      <Hero/>
      <CarGrid  />
      {/* Add other components or sections as needed */}
    </main>
  )
}