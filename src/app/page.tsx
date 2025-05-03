'use client'
import React from 'react'
import { Gallery } from '@/components/Gallery'
import { Quote } from '@/components/Quote'
import { HeroSection } from '@/components/HeroSection8'
// import { SwapColumnFeatures } from '@/components/FeaturesSection'
import { ProgramFeatures } from '@/components/ProgramFeatures'
import { ImageCarousel } from '@/components/ImageCarousel'
import Features from '@/components/Features'
import Map from '@/components/Map'
import { ThemeSection } from '@/components/Themes'
import FAQ from '@/components/FAQs'
import Schedule from '@/components/Schedule'
import { SpeakerSection } from '@/components/SpeakerSection'
import Aboutus from '@/components/Aboutus'  
import Merch from '@/components/Merch'
import Acc from '@/components/Accomodations'
import EventCard from '@/components/EventCard'
import KeynoteSpeakers from '@/components/KeynoteSpeakers'
const page = () => {
  return (
    <div>
      

    <section id='hero' className='bg-slate-50'>
      <HeroSection/> 
    </section>
    <section> 
      <ImageCarousel/>
    </section>
   
    {/* <Features/> */}

    {/* <Features/> */}
    <section id="acc">
 <Acc/>
 </section>


   

    <section id='schedule'>
    {/* <Gallery/> */}
    <Schedule/>
    </section>
    
    <section id='Speakers'><KeynoteSpeakers/></section>
    <section id='Events'>
    <EventCard/>
   </section>

    
    <section id='about'>
      {/* <SwapColumnFeatures/> */}
      <Aboutus/>
    </section>
    <section id='faculty'>
      <SpeakerSection/>
      </section>
    <section id='quote'>
    <Quote/>
    </section>

    <section id='themes'>
    <ThemeSection/>
    </section>

    <section id='feature'>
      <ProgramFeatures/>
    </section>
    {/* <section id='merch'>
      <Merch/>
    </section> */}
    <section id='faqs'>
    <FAQ/>
    </section>

    <section id="map">
    <Map/>
    </section>
    
    

   


  </div>
  )
}

export default page