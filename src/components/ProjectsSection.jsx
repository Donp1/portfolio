import React from "react";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ProjectCard from "./ProjectCard";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="pb-10 sm:w-[95%] mx-auto min-h-screen md:pt-10 sm:pt-5 lg:pt-24 space-y-5 relative"
    >
      <h1 className="text-transparent bg-clip-text uppercase w-fit mx-auto sm:text-sm lg:text-lg font-bold text-center bg-gradient-to-r from-emerald-400 to-sky-500">
        real-world-results
      </h1>
      <h1 className="text-center font-bold sm:text-3xl lg:text-5xl tracking-widest">
        Featured Projects
      </h1>
      <p className="text-center sm:text-lg lg:text-xl text-white/50">
        See how i transform concepts into <br /> engaging digital experiences
      </p>
      <div className="flex flex-col items-center gap-5">
        {portfolioProjects?.map((portfolioProject) => (
          <ProjectCard key={portfolioProject.title} {...portfolioProject} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
