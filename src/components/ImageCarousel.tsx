"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";

export function ImageCarousel() {
  return (
    <div className=" h-[30rem] scrollbar-hide">
      <Carousel pauseOnHover>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/8.jpg"
            width="50000"
            height="50000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute items-center text-white dark:text-yellow-300 md:text-4xl sm:text-4xl text-2xl font-bold px-5 sm:px-[10rem]">	Welcome to C S Bhatiya & Associates <br />
          <div className="text-xl italic">C S Bhatiya & Associates, Chartered Accountants</div> </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/1.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute items-center text-white dark:text-yellow-300 md:text-4xl sm:text-4xl text-2xl font-bold px-5 sm:px-[10rem]">	Fostering Knowledge Sharing and Strong Professional Relationships.</div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/2.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem]   font-bold">Proven Experience with Dependable Service Excellence. </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/3.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem] font-bold">	Client-Centric Approach with a Results-Oriented Focus.</div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/carousel/4.jpg"
            width="5000"
            height="5000"
            className="brightness-50 w-full h-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem] font-bold">Guiding Clients Through Transformation and Growth. </div>
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
            <div className="px-5 sm:px-[10rem]">Exceptional services with a rare blend of technical acumen, expertise, optimism and high level of enthusiasm </div></div>
        </div>

      </Carousel>
    </div>
  );
}
