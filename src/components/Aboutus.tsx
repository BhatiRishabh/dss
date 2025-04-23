import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Aboutus = () => {
  return (
    <div>
        
    <div className="w-full  h-[120vh] bg-slate-50">
    <div className="md:h-1/4 sm:h-[20%] h-[16%] w-[100%]  mx-auto bg-indigo-200"></div>
    <div className="relative md:w-[70%] w-[80%] mx-auto ">
      <div className="absolute md:-top-[7rem] -top-[4rem] flex flex-col items-center">
        <img  className="md:w-[50rem] sm:w-[26rem] w-[20rem] object-center" src="/carousel/10.jpg" alt="Profile"/>
        <h2 className="sm:text-6xl md:text-7xl text-5xl pt-5 font-black font-krona    text-center">About DSS&apos;25</h2>
        <p className="sm:text-center text-justify text-md my-6">The Design Summer School (DSS) 2025 offers a five-day interactive workshop on design and related fields, including Human-Centered AI, Sensing, Photography, and AR/VR/XR. Carefully curated for students and professionals, this program provides an opportunity to expand concepts and skills through hands-on tutorials and explorations of contemporary tools and techniques. DSS aims to foster learning and growth through expert-led mentoring sessions and serves as a platform for bringing together the brightest minds for productive networking.</p>
        <Link href="https://forms.gle/qyqmH4FjPRoHP4iw8" target="_blank">
          <button className=" rounded-xl bg-indigo-500 px-4 py-2 text-2xl font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mt-3">
  Register
</button>
</Link>
      </div>
    </div>
  </div></div>
  )
}

export default Aboutus