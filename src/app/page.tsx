'use client'
import React from 'react'
import { Gallery } from '@/components/Gallery'
import { Quote } from '@/components/Quote'
import { HeroSection } from '@/components/HeroSection8'
import { SwapColumnFeatures } from '@/components/FeaturesSection'
import { ProgramFeatures } from '@/components/ProgramFeatures'
const page = () => {
  return (
    <div>
    <section id='hero' className='bg-slate-50'>
      <HeroSection/>
    </section>
    <section id='gallery'>
    <Gallery/>
    </section>
    <section id='features'>
      <SwapColumnFeatures/>
    </section>
    <section id='quote'>
    <Quote/>
    </section>
    <section id='cards'>
      <ProgramFeatures/>
    </section>
    
  </div>
  )
}

export default page