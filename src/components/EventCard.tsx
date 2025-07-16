"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin } from "lucide-react";


const EventCard = () => {
  return (
    <div className="bg-slate-150">
        <h2 className="sm:text-5xl md:text-6xl text-5xl pt-10 font-black font-krona    text-center">Workshops & Sessions <br /> by Guest Speakers </h2>

    
        <div className="flex flex-col px-10 sm:px-60 py-10 space-y-2">
     
     <motion.div
       className="flex flex-col md:flex-row items-center bg-indigo-400  rounded-xl border border-transparent dark:border-white/[0.2] shadow-lg overflow-hidden p-4 md:p-6 relative"
       whileHover={{ scale: 1.03 }}
       whileTap={{ scale: 0.98 }}
     >
       {/* Image Section */}
       <div className="flex-shrink-0 flex justify-center items-center">
         <Image
           src="/img/CDAC.png"
           alt="Founder"
           width={200}
           height={250}
           className="rounded-xl border-4 border-white shadow-lg"
           priority
         />
       </div>
 
       {/* Content Section */}
       <div className="p-4 flex flex-col justify-between">
         <div className="ml-1">
           <h3 className="text-xl font-bold text-white">
           Session on Vivan : A Vibrant Brain by Dr.Priyanka Jain
           </h3>
           <p className="italic text-white">
             
           Scientist F (Associate Director) & Head of the Neuro-Cognitive AI and XR Group, C-DAC, MeitY, Government of India.
           </p>
 
           <p className="mt-3 text-sm text-white text-justify">
           We are honored to host Dr. Priyanka Jain, Scientist &quot;F&quot; (Associate Director) and Head of the Neuro-Cognitive AI & XR Group at C-DAC, MeitY, Government of India, for a special session titled “Vivan: A Vibrant Brain.” With 24 years of AI research experience, recipient of the AWSAR-2019 Award, and leader of cutting-edge, government-funded projects in brain, computer interfaces and behavioral analysis, Dr. Jain has delivered over 25 invited talks, authored 73 research publications, secured 14 copyrights, and contributed to bilingual scientific literature. She will be accompanied by Mr. Tanmay Jain and Mr. Krishan Sharma for this insightful exploration of the human mind.
           </p>
         </div>
         <div className="mt-4 text-sm">
           <strong>Visit:</strong>
           <div className="flex items-center space-x-2 mt-2 hover:text-white">
             <a href="https://www.linkedin.com/in/priyanka-jain-phd-23308114/" className="hover:underline">
             Official LinkedIn Profile
             </a>
           </div>
           
         </div>
        
       </div>
 
       {/* Button in Bottom-Right Corner */}
       
     </motion.div>
     
     </div>

    
    <div className="flex flex-col px-10 sm:px-60 pb-10 space-y-2">
     
    <motion.div
      className="flex flex-col md:flex-row items-center bg-indigo-400  rounded-xl border border-transparent dark:border-white/[0.2] shadow-lg overflow-hidden p-4 md:p-6 relative"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <Image
          src="/img/Madhan_2024_2.jpg"
          alt="Founder"
          width={200}
          height={250}
          className="rounded-xl border-4 border-white shadow-lg"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between">
        <div className="ml-1">
          <h3 className="text-xl font-bold text-white">
          Session by Dr.Madhan Kumar Vasudevan
          </h3>
          <p className="italic text-white">
            
          Assistant Professor, Department of Design, Indian Institute of Technology Roorkee (IITR)
          </p>

          <p className="mt-3 text-sm text-white text-justify">
          Dr. Madhan Kumar Vasudevan is Assistant Professor of Design at IIT Roorkee. He leverages haptics, HCI and computational neuroscience, especially affective digital touch, to enrich multisensory interaction and wellbeing. He earned his Ph.D. from IIT Madras, completed a UCL postdoc on an EU-funded contactless-haptics project, and received UCL&apos;s Healthy Ageing Challenges Award.          
          </p>
        </div>
        <div className="mt-4 text-sm">
          <strong>Visit:</strong>
          <div className="flex items-center space-x-2 mt-2 hover:text-white">
            <a href="https://iitr.ac.in/Departments/Department%20of%20Design/People/Faculty/101088.html" className="hover:underline">
            Official IITR Profile
            </a>
          </div>
          
        </div>
       
      </div>

      {/* Button in Bottom-Right Corner */}
      
    </motion.div>
    
    </div>

    <div className="flex flex-col px-10 sm:px-60 pb-10 space-y-2">
     
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
      <div className="p-2 flex flex-col justify-between">
      <div className="ml-3">
          <h3 className="text-xl font-bold text-white">
          Workshop on Character Design by Mr.Manoj Sinha 
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
        <div className="mt-4 text-sm ml-3">
          <strong>Visit:</strong>
          <div className="flex items-center space-x-2 mt-2 hover:text-white">
            <a href="https://www.cartoonistmanojsinha.com/" className="hover:underline">
            Official Portfolio
            </a>
          </div>
          
        </div>
      </div>

      {/* Button in Bottom-Right Corner */}
      
    </motion.div>
    
    </div>
    <div className="flex flex-col px-10 sm:px-60 pb-10 space-y-2">

  <motion.div
    className="flex flex-col md:flex-row items-center bg-indigo-400 rounded-xl border border-transparent dark:border-white/[0.2] shadow-lg overflow-hidden p-4 md:p-6 relative"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Image Section */}
    <div className="flex-shrink-0 flex justify-center items-center">
      <Image
        src="/img/gowdhamPrabhakar.jpeg" // replace with correct image path
        alt="Dr.Gowdham Prabhakar"
        width={200}
        height={250}
        className="rounded-xl border-4 border-white shadow-lg"
        priority
      />
    </div>

    {/* Content Section */}
    <div className="p-2 flex flex-col justify-between">
      <div className="ml-3">
        <h3 className="text-xl font-bold text-white">
          New Media Design with Interactive Arts by Dr.Gowdham Prabhakar
        </h3>
        <p className="italic text-white">
          Assistant Professor, Indian Institute of Technology Kanpur (IITR)
        </p>
<p className="mt-3 text-sm text-white text-justify">
  Explore real-time interactive media with TouchDesigner in this hands-on workshop on New Media Design. Learn to create immersive experiences using sensors, projection, audio-reactive visuals, and generative design; ideal for artists, designers, coders, and storytellers interested in interactive installations and digital scenography.
</p>
<p className="mt-3 text-sm text-white text-justify">
  Dr.Gowdham Prabhakar, Assistant Professor at IIT Kanpur and head of HIVE Lab, researches HCI, robotics, and new media art. With a Ph.D. from IISc and postdoc at UCL, his work focuses on embodied, multisensory tech and includes collaborations with firms like Kirloskar and Faurecia.
</p>

      </div>

      <div className="mt-4 text-sm ml-3">
        <strong>Visit:</strong>
        <div className="flex items-center space-x-2 mt-2 hover:text-white">
          <a href="https://home.iitk.ac.in/~gowdhampg/" className="hover:underline" target="_blank" rel="noopener noreferrer">
            HIVE Lab | IIT Kanpur
          </a>
        </div>
      </div>
    </div>
  </motion.div>

</div>

<div className="flex flex-col px-10 sm:px-60 pb-10 space-y-2">
  <motion.div
    className="flex flex-col md:flex-row items-center bg-indigo-400 rounded-xl border border-transparent dark:border-white/[0.2] shadow-lg overflow-hidden p-4 md:p-6 relative"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Image Section */}
    <div className="flex-shrink-0 flex justify-center items-center">
      <Image
        src="/img/aruneshSingh.jpeg" // Replace with actual image
        alt="Arunesh Singh"
        width={200}
        height={250}
        className="rounded-xl border-4 border-white shadow-lg"
        priority
      />
    </div>

    {/* Content Section */}
    <div className="p-2 flex flex-col justify-between">
      <div className="ml-3">
        <h3 className="text-xl font-bold text-white">
          Use of AI tools in Design thinking by Mr.Arunesh Singh
        </h3>
        <p className="italic text-white">
          Design & Growth at Superlinked
        </p>
        <p className="mt-3 text-sm text-white text-justify">
          Arunesh brings 6.5+ years of design experience across startups and labs including Superlinked, Taxmann, and Weave Lab (IIIT-Delhi). His work blends HCI, UX, and AI-powered interfaces, making complex tech intuitive.
        </p>
      </div>
      <div className="mt-4 text-sm ml-3">
        <strong>Visit:</strong>
        <div className="flex items-center space-x-2 mt-2 hover:text-white">
          <a href="https://www.linkedin.com/in/aruneshsingh99/" className="hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  </motion.div>
</div>


        
    
    </div>
  );
};

export default EventCard;