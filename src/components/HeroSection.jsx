import React from "react";
import heroImage1 from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import { FaHandPeace, FaArrowDown  } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="sm:min-h-[80vh] md:pt-10 md:min-h-[60vh] min-h-screen flex items-center justify-center flex-col space-y-5">
      <div className="">
        <Image
          alt="person in front of a computer"
          className="sm:size-40 lg:size-52"
          src={heroImage1}
        />
      </div>
      <div className="rounded-md flex flex-row justify-between items-center gap-5 bg-gray-950 w-fit mx-auto px-5 py-2">
        <div className="size-3 bg-green-500 rounded-full"></div>
        <h4 className="text-white/50 font-semibold">
          Available for a Kinds of Project
        </h4>
      </div>
      <div className="tracking-wide text-center font-bold md:text-4xl sm:text-3xl lg:text-5xl">
        <h1>Building Exceptional</h1>
        <h1>User Experience</h1>
      </div>
      <p className="md:w-[60%] sm:w-[90%] lg:w-[40%] text-white/40 text-center sm:text-base lg:text-lg">
        I specialize in transforming design into functional, high-performance
        web application. Let&apos;s discuss your next project
      </p>
      <div className="md:px-40 sm:px-10 w-fit sm:w-full items-center justify-center flex md:flex-row sm:flex-col lg:flex-row gap-5">
        <button
          className="lg:w-fit sm:w-full justify-center flex flex-row gap-5 text-white rounded-md px-5 py-2 transition-all duration-300
        items-center border border-white/50 hover:bg-white-/80 hover:text-gray-900 font-semibold hover:bg-white"
        >
          <span>Explore My Work</span>
          <FaArrowDown className="text-xl font-bold" />
        </button>
        <button
          className="lg:w-fit sm:w-full justify-center border border-white hover:bg-transparent hover:border hover:border-white
         hover:text-white flex flex-row gap-5 text-gray-900 bg-white px-5 py-2 transition-all 
         duration-300 font-semibold rounded-md items-center"
        >
          <FaHandPeace className="text-yellow-500" />
          <span>Let&apos;s Connect</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
