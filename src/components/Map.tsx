import React from 'react'

const Map = () => {
  return (
   <>
   <div className='rounded-2xl w-full lg:w-[1280px] lg:h-[300px] bg-gray-900 flex flex-col items-center justify-center mx-auto  relative'>
      <iframe
    className="rounded-2xl lg:w-[1000px] lg:h-[400px] lg:absolute lg:-bottom-[60%] z-30"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
    width="400"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
          {/* <img src="/assets/Maps.svg" alt="map iframe"  className='lg:w-[1000px] lg:h-[400px] lg:absolute lg:-bottom-[60%] z-30'/> */}
      </div>
   </>
  )
}

export default Map