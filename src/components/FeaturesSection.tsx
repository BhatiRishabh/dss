// import { motion, useInView } from "framer-motion";
// import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
// import { IconType } from "react-icons";
// import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

// const Example = () => {
//   return (
//     <>
//       {/* <div className="flex h-48 flex-col items-center justify-center bg-slate-900">
//         <span className="font-semibold uppercase text-white">Scroll down</span>
//         <span className="mt-2 block rounded-full bg-indigo-600 px-4 py-1 text-center font-medium text-white md:hidden">
//           Note: This is much cooler on desktop 😊
//         </span>
//       </div> */}
//       <SwapColumnFeatures />
//       {/* <div className="flex h-48 items-center justify-center bg-indigo-600">
//         <span className="font-semibold uppercase text-white">Scroll up</span>
//       </div> */}
//     </>
//   );
// };


// export const SwapColumnFeatures = () => {
//   const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

//   return (
//     <section className="relative mx-auto max-w-7xl">
//       <SlidingFeatureDisplay featureInView={featureInView} />

//       <div className="-mt-[100vh] hidden md:block" />

//       {features.map((s) => (
//         <Content
//           key={s.id}
//           featureInView={s}
//           setFeatureInView={setFeatureInView}
//           {...s}
//         />
//       ))}
//     </section>
//   );
// };

// const SlidingFeatureDisplay = ({
//   featureInView,
// }: {
//   featureInView: FeatureType;
// }) => {
//   return (
//     <div
//       style={{
//         justifyContent:
//           featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
//       }}
//       className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
//     >
//       <motion.div
//         layout
//         transition={{
//           type: "spring",
//           stiffness: 400,
//           damping: 25,
//         }}
//         className="h-fit w-3/5 rounded-xl p-8"
//       >
//         <FeatureImage featureInView={featureInView} />
//       </motion.div>
//     </div>
//   );
// };

// const Content = ({
//   setFeatureInView,
//   featureInView,
// }: {
//   setFeatureInView: React.Dispatch<React.SetStateAction<FeatureType>>;
//   featureInView: FeatureType;
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "-150px",
//   });

//   useEffect(() => {
//     if (isInView) {
//       setFeatureInView(featureInView);
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="relative z-0 flex h-fit md:h-screen"
//       style={{
//         justifyContent:
//           featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
//       }}
//     >
//       <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
//             {featureInView.callout}
//           </span>
//           <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
//           <p className="text-slate-600 ">{featureInView.description}</p>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="mt-8 block md:hidden"
//         >
//           <FeatureImage featureInView={featureInView} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const FeatureImage = ({ featureInView }: { featureInView: FeatureType }) => {
//   return (
//     <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-xl bg-slate-200">
//       <img
//         src={featureInView.image}
//         alt={featureInView.title}
//         className="h-full w-full object-cover"
//       />
//     </div>
//   );
// };

// export default SwapColumnFeatures;

// type FeatureType = {
//   id: number;
//   callout: string;
//   title: string;
//   description: string;
//   contentPosition: "l" | "r";
//   image: string; 
// };


// const features: FeatureType[] = [
//   {
//     id: 1,
//     callout: "Get noticed",
//     title: "Learn ",
//     description:
//       "Step up to the design disciplines of the modern world such as XR (AR, VR & MR), Game Design and Human Centered AI.",
//     contentPosition: "r",
//     image: "/img/Copy of DSS_DAY_5_228.JPG", 
//   },
//   {
//     id: 2,
//     callout: "Find people",
//     title: "Connect",
//     description:
//       "Explore Design at our 5 day Summer School at IIIT Delhi for both professionals and students.",
//     contentPosition: "l",
//     image: "/img/Copy of Design summer school_49.JPG",
//   },
//   {
//     id: 3,
//     callout: "Have fun",
//     title: "Grow",
//     description:
//       "Explore our carefully curated 3 tracks convering modern day skills and tools in the domains of Human Centered AI, Game and Animation Design and XR consisting of MR, VR and AR.",
//     contentPosition: "r",
//     image: "/img/Copy of Design summer school_1.JPG",
//   },
// ];




