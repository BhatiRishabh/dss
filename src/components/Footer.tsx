// components/Footer.tsx
'use client';
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa"; // Font Awesome icons

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap items-start justify-between md:px-12">
      {/* Logo and Description */}
      
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
      <Link href="/" className="text-gray-400 hover:text-indigo-300 block">
        <img className="w-40 h-auto bg-slate-50 p-2 rounded-lg items-center" src="/img/Logo.png" alt="DSS Logo" /></Link>
        {/* <p className="my-4 max-w-md text-center md:text-left">
        Transforming creative minds into design professionals through immersive learning experiences. 
        Organized by Department of Human Centered Design in collaboration with Center for Design and New Media
        </p> */}
      </div>

      {/* Quick Links */}
      <div className="text-left">
        <h2 className="font-bold text-xl mt-4 text-white">Quick Links</h2>
        <div className="w-30 h-1 border-b-2 border-indigo-400 rounded-2xl my-2"></div>
        <a href="/" className="text-gray-400 hover:text-indigo-300 block">Home</a>
        <a href="#about" className="text-gray-400 hover:text-indigo-300 block">About us</a>
        <a href="#themes" className="text-gray-400 hover:text-indigo-300 block">Themes</a>
        <a href="#feature" className="text-gray-400 hover:text-indigo-300 block">Features</a>
        <a href="#schedule" className="text-gray-400 hover:text-indigo-300 block">Schedule</a>
      </div>

      {/* Follow Us */}
      <div className="text-left">
        <h2 className="font-bold text-xl mt-4 text-white">Follow Us</h2>
        <div className="w-30 h-1 border-b-2 border-indigo-400 rounded-2xl my-2"></div>
        <div className="flex flex-col space-y-4 hover:text-indigo-300">
          <Link href="https://www.linkedin.com/company/hcdiiitd/posts/?feedView=all" className="flex items-center">
            <FaLinkedin className="w-5 h-5 mr-2 text-gray-400 "  target="_blank"/>
            <span className="text-gray-400 ">LinkedIn</span>
          </Link>
          <Link href="https://www.facebook.com/hcdiiitd/" target="_blank"  className="flex items-center ">
            <FaFacebook className="w-5 h-5 mr-2 text-gray-400 " />
            <span className="text-gray-400 ">Facebook</span>
          </Link>
          <Link href="https://x.com/hcdiiitd?lang=en" target="_blank" className="flex items-center ">
            <FaTwitter className="w-5 h-5 mr-2 text-gray-400 " />
            <span className="text-gray-400 ">Twitter</span>
          </Link>
          <Link href="https://www.instagram.com/hcdiiitd" target="_blank" className="flex items-center ">
            <FaInstagram className="w-5 h-5 mr-2 text-gray-400 " />
            <span className="text-gray-400 ">Instagram</span>
          </Link>
          /

        </div>
      </div>

      {/* Contact Us */}
      <div className="text-left">
        <h2 className="font-bold text-xl mt-4 text-white">Contact Us</h2>
        <div className="w-32 h-1 border-b-2 border-indigo-400 rounded-2xl my-2"></div>
        {/* <p className="text-gray-400">dss@iiiitd.ac.in</p> */}
        <p className="text-gray-400">IIIT Delhi(Indraprastha Institute <br /> of Information Technology Delhi), <br />Okhla Phase III,New Delhi,<br /> Delhi 110020</p>
        
        <p className="text-gray-400">
          Email:{" "}
          <a href="mailto:dss@iiiitd.ac.in" className="underline">
          dss@iiiitd.ac.in
          </a>
        </p>
      </div>

      {/* Copyright Section */}
      
      
      <div className="w-full text-center pb-3 text-gray-500 mt-5">
      <hr />
        <p className="mt-4">&copy; 2025 Design Summer School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;