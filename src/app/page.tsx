'use client'
import React from 'react'
import { Gallery } from '@/components/Gallery'
import { Quote } from '@/components/Quote'
import { HeroSection } from '@/components/HeroSection8'
import { SwapColumnFeatures } from '@/components/FeaturesSection'
import { ProgramFeatures } from '@/components/ProgramFeatures'
import { ImageCarousel } from '@/components/ImageCarousel'
import Features from '@/components/Features'
const page = () => {
  return (
    <div>

    <section id='hero' className='bg-slate-50'>
      <HeroSection/> 
    </section>
    <ImageCarousel/>
    <Features/>







    <section id='schedule'>
    {/* <Gallery/> */}
    </section>
    <section id='about'>
      {/* <SwapColumnFeatures/> */}
    </section>
    <section id='quote'>
    <Quote/>
    </section>
    <section id='feature'>
      <ProgramFeatures/>
    </section>

  </div>
  )
}

export default page