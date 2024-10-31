import Link from "next/link";
import React from "react";
import {
  BiLogoFacebook,
  BiLogoWhatsappSquare,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";

const links = [
  {
    title: "Facebook",
    logo: <BiLogoFacebook />,
    link: "",
  },
  {
    title: "Whatsapp",
    logo: <BiLogoWhatsappSquare />,
    link: "",
  },
  {
    title: "Linkedin",
    logo: <BiLogoLinkedinSquare />,
    link: "",
  },
  {
    title: "Github",
    logo: <BiLogoGithub />,
    link: "",
  },
];
const Footer = () => {
  return (
    <footer className="flex lg:flex-row sm:flex-col items-center justify-between sm:w-[90%] lg:w-[80%] mx-auto py-5 border-t border-t-white/30">
      <div className="sm:mb-5">
        <h1 className="text-base text-white/50">
          &copy; 2024 All rights reserved
        </h1>
      </div>
      <div className="flex lg:flex-row sm:flex-col gap-5">
        {links.map((link, index) => (
          <Link
            href={link.link}
            title={`visit ${link.title}`}
            className="flex items-center gap-2 text-medium text-white/30"
            key={index}
          >
            <h1>{link.title}</h1>
            {link.logo}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
