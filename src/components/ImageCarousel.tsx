// "use client";
// import Image from "next/image";
// import { Carousel } from "flowbite-react";

// export function ImageCarousel() {
//   return (
//     <div className=" h-[30rem] scrollbar-hide">
//       <Carousel pauseOnHover>
//         <div className="relative flex h-full items-center justify-center">
//           <Image
//             src="/carousel/1.jpg"
//             width="50000"
//             height="50000"
//             className="brightness-50 w-full h-full object-cover"
//             alt="Slide 1"
//           />
//           <div className="absolute items-center text-white dark:text-yellow-300 md:text-4xl sm:text-4xl text-2xl font-bold px-5 sm:px-[10rem]">	Design Summer School <br />
//           <div className="text-xl italic">Unlock Your Creative Potential with Hands-On Design Workshops</div> </div>
//         </div>
//         <div className="relative flex h-full items-center justify-center">
//           <Image
//             src="/carousel/4.jpg"
//             width="5000"
//             height="5000"
//             className="brightness-50 w-full h-full object-cover"
//             alt="Slide 1"
//           />
//           <div className="absolute items-center text-white dark:text-yellow-300 md:text-4xl sm:text-4xl text-2xl font-bold px-5 sm:px-[10rem]">	Master Emerging Technologies: XR, AR, VR & More</div>
//         </div>
//         <div className="relative flex h-full items-center justify-center">
//           <Image
//             src="/carousel/2.jpg"
//             width="5000"
//             height="5000"
//             className="brightness-50 w-full h-full object-cover"
//             alt="Slide 2"
//           />
//           <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem]   font-bold">Explore our carefully curated 3 tracks convering modern day skills and tools in the domains of Human Centered AI, Game and Animation Design and XR consisting of MR, VR and AR </div>
//         </div>
//         <div className="relative flex h-full items-center justify-center">
//           <Image
//             src="/carousel/3.jpg"
//             width="5000"
//             height="5000"
//             className="brightness-50 w-full h-full object-cover"
//             alt="Slide 3"
//           />
//           <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem] font-bold">	Explore Design Thinking, AI, and Visual Storytelling</div>
//         </div>
//         <div className="relative flex h-full items-center justify-center">
//           <Image
//             src="/carousel/8.jpg"
//             width="5000"
//             height="5000"
//             className="brightness-50 w-full h-full object-cover"
//             alt="Slide 4"
//           />
//           <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl px-5 sm:px-[10rem] font-bold">Shape the Future of HCI with Industry Experts at IIIT-Delhi </div>
//         </div>
//         <div className="relative flex h-full items-center justify-center">
//           <Image
//             src="/carousel/5.jpg"
//             width="5000"
//             height="5000"
//             className="brightness-50 w-full h-full object-cover"
//             alt="Slide 5"
//           />
//           <div className="absolute text-white dark:text-yellow-300  md:text-4xl sm:text-4xl text-2xl font-bold">
//             <div className="px-5 sm:px-[10rem]">Explore Design at our 5 day Summer School at IIIT Delhi for both professionals and students</div></div>
//         </div>

//       </Carousel>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

export function ImageCarousel() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Close modal on "Escape" key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreenImage(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleImageClick = (src: string) => {
    setFullscreenImage(src);
  };

  const handleClose = () => {
    setFullscreenImage(null);
  };

  const imageSources = [
    "/carousel/1.jpg",
    "/carousel/4.jpg",
    "/carousel/2.jpg",
    "/carousel/3.jpg",
    "/carousel/8.jpg",
    "/carousel/5.jpg",
  ];

  return (
    <div className="relative h-[30rem] scrollbar-hide p-10 bg-slate-50">
      <Carousel pauseOnHover>
        {imageSources.map((src, index) => (
          <div
            key={index}
            className="relative flex h-full items-center justify-center"
          >
            <Image
              src={src}
              width={5000}
              height={5000}
              className="brightness-100 w-full h-full object-cover cursor-pointer"
              alt={`Slide ${index + 1}`}
              onClick={() => handleImageClick(src)}
            />
          </div>
        ))}
      </Carousel>

      {/* Smooth Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleClose}
        >
          <div className="relative p-6 sm:p-10 max-w-5xl w-full max-h-[90vh] mx-auto">
            <Image
              src={fullscreenImage}
              alt="Full View"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain rounded-lg shadow-xl transition-transform duration-300"
            />
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 text-white text-4xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
