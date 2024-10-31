import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="sm:py-8 lg:py-16 sm:w-[90%] lg:w-[80%] mx-auto flex items-center sm:flex-col lg:flex-row mt-5 mb-16 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 px-8 text-gray-900"
    >
      <div className="flex flex-grow flex-col gap-3 sm:mb-5">
        <h1 className="font-semibold sm:text-2xl lg:text-4xl tracking-wide lg:text-start sm:text-center">
          Let&apos;s create something amazing together
        </h1>
        <p className="sm:text-base lg:text-lg text-gray-950 lg:w-[80%] lg:text-start sm:text-center">
          Ready to bring your next project to life? Let&apos;s connect and
          discuss how i can help you achieve your goals
        </p>
      </div>
      <div className="sm:w-full lg:w-fit flex items-center justify-center">
        <button className="sm:w-full transition duration-300 hover:bg-transparent border-2 border-gray-950 hover:text-gray-950 rounded-lg flex items-center justify-center gap-3 bg-gray-950 text-white font-medium px-5 py-2">
          <span>Contact Me</span>
          <BiPhoneCall />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
