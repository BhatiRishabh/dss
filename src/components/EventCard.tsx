"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin } from "lucide-react";


const EventCard = () => {
  return (
    <div className="bg-slate-150">
        <h2 className="sm:text-5xl md:text-6xl text-5xl pt-10 font-black font-krona    text-center">Workshops by Guest Speakers </h2>

    <div className="flex flex-col px-10 sm:px-60 py-10 space-y-2">
     
    <motion.div
      className="flex flex-col md:flex-row items-center bg-indigo-400  rounded-xl border border-transparent dark:border-white/[0.2] shadow-lg overflow-hidden p-4 md:p-6 relative"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <Image
          src="/img/manojSinha.jpeg"
          alt="Founder"
          width={200}
          height={250}
          className="rounded-xl border-4 border-white shadow-lg"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
          Workshop on Character Design by Manoj Sinha 
          </h3>
          <p className="italic text-white">
            
            Leading Cartoonists in India
          </p>
          <p className="mt-3 text-sm text-white text-justify">
          A cartoonist is a visual artist who specialises in drawing cartoons... There is one such man ,it has been said about him that - &quot;he has got Ink directly from Saraswati Maa&quot;,
           a man with such persona is none other than Manoj Sinha, He started his journey from his native land Ranchi and is presently based in Delhi. 
           working with the Hindustan Times Group, New Delhi. 
          </p>
        </div>
        <div className="mt-4 text-sm">
          <strong>Visit:</strong>
          <div className="flex items-center space-x-2 mt-2 hover:text-white">
            <a href="mailto:chintan@csbhatiya.com" className="hover:underline">
            https://www.cartoonistmanojsinha.com/
            </a>
          </div>
          
        </div>
      </div>

      {/* Button in Bottom-Right Corner */}
      
    </motion.div>
    
    </div>
    <div className="flex flex-col px-10 sm:px-60 py-10 space-y-2">
     
    <motion.div
      className="flex flex-col md:flex-row items-center bg-indigo-400  rounded-xl border border-transparent dark:border-white/[0.2] shadow-lg overflow-hidden p-4 md:p-6 relative"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <Image
          src="/img/Bijendra.png"
          alt="Founder"
          width={200}
          height={250}
          className="rounded-xl border-4 border-white shadow-lg"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
          Workshop on Photography by Bijendra Kumar
          </h3>
          <p className="italic text-white">
            
            Leading Cartoonists in India
          </p>
          <p className="mt-3 text-sm text-white text-justify">
          Bijendra Kumar, a seasoned photographer and visual artist, joins DSS 2025 to share his mastery in photography. 
          With decades of experience across cultural festivals, exhibitions, and national art shows, his creative 
          lens captures India&apos;s heritage and emotion. Participants will gain insights from his award-winning artistry 
          and storytelling through visuals.
          </p>
        </div>
       
      </div>

      {/* Button in Bottom-Right Corner */}
      
    </motion.div>
    
    </div>
    </div>
  );
};

export default EventCard;