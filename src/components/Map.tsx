import React from 'react'

const Map = () => {
  return (
   <div className='bg-slate-50 '>

   <h2 className="text-4xl font-bold bg-slate-50 md:text-5xl text-indigo-500 max-w-6xl mx-auto">
   Where to find us ?
            </h2>
   <div className=' w-full  lg:h-[500px] bg-slate-50 flex flex-col items-center justify-center mx-auto  relative'>
    
      <iframe
    className="rounded-2xl lg:w-[1150px] lg:h-[400px] lg:absolute lg:-bottom[10%] z-30"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7957355134567!2d77.27060127529043!3d28.5458587880118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1743186565396!5m2!1sen!2sin"
    width="400"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />


          {/* <img src="/assets/Maps.svg" alt="map iframe"  className='lg:w-[1000px] lg:h-[400px] lg:absolute lg:-bottom-[60%] z-30'/> */}
      </div>
   </div>
  )
}

export default Map