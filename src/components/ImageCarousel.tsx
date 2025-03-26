"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";

export function ImageCarousel() {
  return (
    <div className=" h-[30rem] scrollbar-hide">
      <Carousel pauseOnHover>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/1.jpg"
            width="50000"
            height="50000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute items-center text-white dark:text-yellow-300 md:text-4xl sm:text-4xl text-2xl font-bold px-5 sm:px-[10rem]">	Design Summer School <br />
          <div className="text-xl italic">Unlock Your Creative Potential with Hands-On Design Workshops</div> </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/4.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute items-center text-white dark:text-yellow-300 md:text-4xl sm:text-4xl text-2xl font-bold px-5 sm:px-[10rem]">	Master Emerging Technologies: XR, AR, VR & More</div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/2.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem]   font-bold">Explore our carefully curated 3 tracks convering modern day skills and tools in the domains of Human Centered AI, Game and Animation Design and XR consisting of MR, VR and AR </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/3.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem] font-bold">	Explore Design Thinking, AI, and Visual Storytelling</div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/8.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem] font-bold">Shape the Future of HCI with Industry Experts at IIIT-Delhi </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/5.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 5"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl font-bold">
            <div className="px-5 sm:px-[10rem]">Explore Design at our 5 day Summer School at IIIT Delhi for both professionals and students</div></div>
        </div>

      </Carousel>
    </div>
  );
}
