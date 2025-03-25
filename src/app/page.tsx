'use client'
import React from 'react'
import { Gallery } from '@/components/Gallery'
import { Quote } from '@/components/Quote'
import { HeroSection } from '@/components/HeroSection8'
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
      <h1 className='p-4'> Hello Welcome to Design Summer School</h1>
      <h1 className='p-4'> Hello Welcome to Design Summer School</h1>
      <h1 className='p-4'> Hello Welcome to Design Summer School</h1>
      </div>
  )
}

export default page