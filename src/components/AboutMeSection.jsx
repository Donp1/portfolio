import React, { Fragment } from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoAws,
  BiLogoChrome,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoGithub,
  BiLogoTailwindCss,
} from "react-icons/bi";

const tools = [
  {
    title: "Javascript",
    logo: <BiLogoJavascript className="size-10 text-emerald-500" />,
  },
  {
    title: "Git",
    logo: <BiLogoGit className="size-10 text-emerald-500" />,
  },
  {
    title: "Github",
    logo: <BiLogoGithub className="size-10 text-emerald-500" />,
  },
  {
    title: "HTML5",
    logo: <BiLogoHtml5 className="size-10 text-emerald-500" />,
  },
  {
    title: "NODE.JS",
    logo: <BiLogoNodejs className="size-10 text-emerald-500" />,
  },
  {
    title: "mongodb",
    logo: <BiLogoMongodb className="size-10 text-emerald-500" />,
  },
  {
    title: "react",
    logo: <BiLogoReact className="size-10 text-emerald-500" />,
  },
  {
    title: "aws",
    logo: <BiLogoAws className="size-10 text-emerald-500" />,
  },
  {
    title: "chrome",
    logo: <BiLogoChrome className="size-10 text-emerald-500" />,
  },
  {
    title: "css3",
    logo: <BiLogoCss3 className="size-10 text-emerald-500" />,
  },
  {
    title: "tailwind",
    logo: <BiLogoTailwindCss className="size-10 text-emerald-500" />,
  },
  {
    title: "firebase",
    logo: <BiLogoFirebase className="size-10 text-emerald-500" />,
  },
];

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="sm:py-10 lg:py-20 sm:w-[90%] lg:w-[80%] mx-auto"
    >
      <SectionHeader
        text1={"About Me"}
        desc={"learn more about who i am, what i do, and what inspires me"}
        content={"A Glimpse Into My World"}
      />
      <div className="mb-5">
        <Card>
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 mb-2">
              <h1 className="font-bold sm:text-2xl lg:text-3xl">My Toolbox</h1>
            </div>
            <p className="sm:w-[90%] lg:w-[30%] mx-auto sm:text-sm lg:text-base text-white/30 text-center mb-5">
              Explore the technologies i use to craft exceptional digital
              experiences.
            </p>
            <div className="flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-5">
              <div className="flex flex-none items-center gap-5 pr-5 animate-move-left [animation-duration:60s]">
                {[...new Array(2)].map((_, index) => (
                  <Fragment key={index}>
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 border-2 border-white/50 rounded-xl px-5 py-3"
                      >
                        {tool.logo}
                        <h1 className="text-xl font-medium tracking-wide uppercase">
                          {tool.title}
                        </h1>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex flex-none items-center gap-5 ps-5 animate-move-right [animation-duration:30s]">
                {[...new Array(2)].map((_, index) => (
                  <Fragment key={index}>
                    {tools.reverse().map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 border-2 border-white/50 rounded-xl px-5 py-3"
                      >
                        {tool.logo}
                        <h1 className="text-xl font-medium tracking-wide uppercase">
                          {tool.title}
                        </h1>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMeSection;
