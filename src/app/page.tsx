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
      <section>
        <HeroSection/>
      </section>
      <section>
      <Gallery/>
      </section>
      <section>
      <Quote/>
      </section>
      <section>
        <SwapColumnFeatures/>
      </section>
      <section>
        <ProgramFeatures/>
      </section>
      </div>
  )
}

export default page