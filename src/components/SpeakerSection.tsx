import React from 'react'
import Image from 'next/image'

export function SpeakerSection() {
  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">Role: {member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const teamMembers = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "/img/sonal.png"
    },
    {
      name: "Jane Smith",
      role: "Graphic Designer",
      image: "https://spacema-dev.com/elevate/assets/images/team/4.jpg"
    },
    {
      name: "Alex Johnson",
      role: "Marketing Manager",
      image: "https://spacema-dev.com/elevate/assets/images/team/3.jpg"
    },
    {
      name: "Peter Johnson",
      role: "SEO Specialist",
      image: "https://spacema-dev.com/elevate/assets/images/team/2.jpg"
    }
  ];
