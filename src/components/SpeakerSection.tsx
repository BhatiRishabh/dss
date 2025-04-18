import React from 'react'
import Image from 'next/image'

export function SpeakerSection() {
  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
      <h2 className="sm:text-6xl md:text-7xl text-5xl pb-4  font-black text-center">Instructors</h2>
      Unleash Your Creativity and Ignite Your Design Passion: Dive into a Summer of Learning and Connection with the Industry&apos;s Leading Design Experts

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <Image
              height={200}
              width={200}
                src={member.image}
                alt={member.name}
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const teamMembers = [
    {
      name: "Dr. Sonal Keshwani",
      role: "Ph.D(2018), IISc Banglore",
      image: "/img/sonal.png"
    },
    {
      name: "Dr. Richa Gupta",
      role: "Ph.D IIT Delhi",
      image: "/img/richa_gupta.jpg"
    },
    {
      name: "Dr. Anmol Srivastava",
      role: "Ph.D IIT Guwahati",
      image: "/img/anmol_srivastav.jpg"
    },
    {
      name: "Dr. Pragma Kar",
      role: "Ph.D(2023), Jadavpur University",
      image: "/img/Pragma.png"
    },
    {
      name: "Dr. Jainendra Sukhla",
      role: "Ph.D, Universitat Rovira i Virgili",
      image: "/img/Jainendra.png"
    },
    {
      name: "Dr. Rajiv Ratn Shah",
      role: "Ph.D, National University of Singapore",
      image: "/img/Rajiv.png"
    }
    ,
    {
      name: "Dr. Kalpana Shankhwar",
      role: "Ph.D, National Taiwan University",
      image: "/img/Kalpana.png"
    }
  ];
