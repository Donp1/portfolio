import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className=" z-50 backdrop-blur-lg p-0 fixed rounded-full border border-white/50 top-3 left-0 right-0 bg-white/30 lg:w-[50%] sm:w-[95%] mx-auto h-12">
      <div className="flex flex-row items-center h-full p-0">
        <Link href={"/"} className="nav-link">
          Home
        </Link>
        <Link href={"#about"} className="nav-link">
          About
        </Link>
        <Link href={"#projects"} className="nav-link">
          Projects
        </Link>
        <Link
          href={"#contact"}
          className="nav-link bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
