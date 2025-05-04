import Link from "next/link";
export default function Acc() {
    return (
      <div className="py-20 px-8 md:py-28 md:px-40">
        
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 ">
        <div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-justify font-black font-krona text-gray-800 leading-tight">
          Accommodations Available 
          </h2>
          <p className="mt-4 text-base sm:text-lg text-violet-600 text-justify ">Accommodation Form and Fees need to be paid separately.</p>
        <p className="mt-4 text-base sm:text-lg text-gray-600 text-justify ">
        Shared accommodation is available for the duration of the summer school, charged separately. <br />
           Here is a step-by-step guide in PDF format. <div className="text-bold text-violet-600 underline"><Link href="https://drive.google.com/file/d/1yprVZbt4I8AhwdfFzQTkuK7NAvlX4d_H/view?usp=sharing" target="_blank">You can view or download the document.</Link></div> <br />
           To avail the same, apply by 7th May on the portal
        </p>
        <Link href="https://payments.iiitd.edu.in/pg/fees/pg.html" target="_blank">
            <button className="pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3 text-2xl font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100 mt-6">
              Apply Now
            </button>
          </Link>
          <p className="mt-4 text-base font-bold sm:text-lg text-violet-600 text-justify "> Please Note :
<br/>1. Accommodation is available for a limited time only.
<br/>2. Kindly note that accommodation can only be availed between May 11 to May 17, 2025.
<br/>3. Accommodation charges are not included in the registration fees.
<br/>4. Accommodation does not include the cost of food.
<br/>5. Seats for accommodation are limited and will be allotted on a first-come, first-served basis.
<br/>6. Once paid, accommodation fees are strictly non-refundable.
<br/>7. Please plan and register accordingly to secure your stay.
</p>
        </div>

        <div className="w-full max-w-4xl h-[60vh] sm:h-[70vh] md:h-[90vh] shadow-lg border border-gray-300 rounded-lg overflow-hidden">
  <iframe
    src="/acc.pdf"
    className="w-full h-full"
    title="PDF Viewer"
  />
</div>

        </div>
        
      </div>
    );
  }
  