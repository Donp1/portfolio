"use client";
import React from "react";
import heroImage1 from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaFileDownload, FaHandPeace } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
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
        <div className="size-3 bg-green-500 rounded-full">
          <div className="animate-ping-large size-3 bg-green-500 rounded-full"></div>
        </div>
        <h4 className="text-white/50 font-semibold">
          Available for all Kinds of Project
        </h4>
      </div>
      <div className="sm:w-[80%]  lg:w-[60%] mx-auto font-semibold sm:text-3xl lg:text-5xl text-center tracking-wider ">
        <TypeAnimation
          sequence={[
            // wait 1s before replacing "Mice" with "Hamsters"
            "Crafting Digital Experiences, Where Code Meets Creativity",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Building the Web, One Pixel at a Time",
            1000,
            "Innovative Solutions for Tomorrow's Challenges",
            1000,
            "Turning Ideas into Interactive Reality",
            1000,
            "Your Vision, My Code: Let's Build Something Great",
            1000,
            "Designing Seamless Journeys Through Code",
            1000,
            "Empowering Brands with Tailored Web Solutions",
            1000,
            "Code with Purpose: Transforming Concepts into Code",
            1000,
            "Innovative Web Development for a Dynamic World",
            1000,
            "Sculpting Digital Landscapes: The Art of Web Development",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="md:w-[60%] sm:w-[90%] lg:w-[40%] text-white/40 text-center sm:text-base lg:text-lg">
        I specialize in transforming design into functional and high-performance
        web application. Let&apos;s discuss your next project
      </p>
      <div className="md:px-40 sm:px-10 w-fit sm:w-full items-center justify-center flex md:flex-row sm:flex-col lg:flex-row gap-5">
        <Link
          href={"#projects"}
          className="lg:w-fit sm:w-full justify-center flex flex-row gap-5 text-white rounded-md px-5 py-2 transition-all duration-300
        items-center border border-white/50 hover:bg-white-/80 hover:text-gray-900 font-semibold hover:bg-white"
        >
          <span>Explore My Work</span>
          <span className="text-xl font-bold">&darr;</span>
        </Link>
        <Link
          download={"joseph-chukwuka-cv"}
          target="_blank"
          href={"http://localhost:3000/joseph-chukwuka-cv.pdf"}
          className="lg:w-fit sm:w-full justify-center border border-white hover:bg-transparent hover:border hover:border-white
         hover:text-white flex flex-row gap-5 text-gray-900 bg-white px-5 py-2 transition-all 
         duration-300 font-semibold rounded-md items-center"
        >
          <FaDownload className="text-yellow-500" />
          <span>Download CV</span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
