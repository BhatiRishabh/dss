'use client'

import React from 'react'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'


const KeynoteSpeakers = () => {
  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
        <h2 className="sm:text-6xl md:text-7xl text-5xl pt-10 font-black text-center">Keynote Speakers</h2>

          {/* <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check our awesome team members
          </h1> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-80">
                <Image
                  src={speaker.image}
                  width={500}
                  height={500}
                  alt={speaker.name}
                  className="object-center object-cover w-full h-full"
                />
              </div>
              <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-white font-bold">{speaker.name}</p>
                <p className="text-base text-gray-400 font-normal">{speaker.role}</p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">{speaker.bio}</p>

                <div className="flex justify-start space-x-4 pt-2">
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-indigo-400 transition"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default KeynoteSpeakers

export const speakers = [
    {
      "name": "Dr. Srinivasan Venkataraman",
      "role": "Associate Professor, Department of Design, Indian Institute of Technology Delhi (IIT Delhi)",
      "bio": "Dr. Srinivasan Venkataraman broad interests are in Design Creativity and Innovation, Design Theory and Methodology, Design Cognition, Design Thinking, Virtual Reality, Engineering Design and New Product Development.",
      "image": "/img/Srinivasan-Venkataraman.png",
      "linkedin": "https://www.linkedin.com/in/00vsrinivasan/"

    },
  ]
  