"use client"
import React from 'react'
import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'

const CarGrid = dynamic(() => import('@/components/CarGrid'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Hero/>
      <CarGrid />
    </main>
  )
}

