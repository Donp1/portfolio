import Image from "next/image";

const ProjectCard = ({ company, year, title, image, results }) => {
  return (
    <div
      className="md:w-[90%] flex sm:flex-col lg:flex-row gap-5 border-2
   border-white/30 rounded-lg bg-white/5 backdrop-blur-md"
    >
      <div className="py-5 sm:px-5 lg:px-16 flex flex-col justify-start sm:space-y-2 lg:space-y-5">
        <div
          className="flex flex-row items-center text-transparent bg-clip-text uppercase w-fit 
         md:text-2xl text-lg font-bold bg-gradient-to-r from-emerald-400 to-sky-500 space-x-2"
        >
          <span>{company}</span>
          <span className="size-2 bg-emerald-500 rounded-full"> </span>
          <span>{year}</span>
        </div>
        <h1 className="font-bold text-white/90 tracking-wide md:text-4xl sm:text-2xl lg:text-3xl">
          {title}
        </h1>
        <br />
        <hr className="border-white/20" />
        <div className="flex flex-col gap-3">
          {results.map(({ title }, index) => (
            <div
              className="text-white/20 flex flex-row gap-3 items-center"
              key={index}
            >
              <span className=" size-5 md:text-lg text-sm rounded-full bg-white/20 flex items-center justify-center">
                &#10004;
              </span>
              <span>{title}</span>
            </div>
          ))}
        </div>
        <button className="bg-white mt-5 text-gray-900 font-semibold text-lg flex flex-row sm:justify-center gap-3 rounded-md py-2 px-5 sm:w-full w-fit">
          <span>Visit Live Site</span>
          <span>&uarr;</span>
        </button>
      </div>

      <div className="md:px-14 sm:p-3 lg:p-5 flex items-center justify-center">
        <Image
          quality={100}
          priority
          className="size-60 w-full"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
