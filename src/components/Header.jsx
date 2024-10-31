"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();

  const [activeLink, setActiveLink] = useState("home");

  console.log(path);
  return (
    <nav className=" z-50 backdrop-blur-lg p-0 fixed rounded-full border border-white/50 top-3 left-0 right-0 bg-white/30 lg:w-[50%] sm:w-[95%] mx-auto h-12">
      <div className="flex flex-row items-center h-full p-0">
        <Link
          onClick={() => setActiveLink("home")}
          href={"/"}
          className={`nav-link ${
            activeLink == "home" &&
            "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
          }`}
        >
          Home
        </Link>
        <Link
          onClick={() => setActiveLink("about")}
          href={"#about"}
          className={`nav-link ${
            activeLink == "about" &&
            "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
          }`}
        >
          About
        </Link>
        <Link
          onClick={() => setActiveLink("projects")}
          href={"#projects"}
          className={`nav-link ${
            activeLink == "projects" &&
            "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
          }`}
        >
          Projects
        </Link>
        <Link
          onClick={() => setActiveLink("contact")}
          href={"#contact"}
          className={`nav-link ${
            activeLink == "contact" &&
            "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
