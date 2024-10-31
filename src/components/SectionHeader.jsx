import React from "react";

const SectionHeader = ({ text1, content, desc }) => {
  return (
    <div className="mb-20 flex flex-col gap-5">
      <h1 className="text-transparent bg-clip-text uppercase w-fit mx-auto sm:text-sm lg:text-lg font-bold text-center bg-gradient-to-r from-emerald-400 to-sky-500">
        {text1}
      </h1>
      <h1 className="text-center font-bold sm:text-3xl lg:text-5xl tracking-widest">
        {content}
      </h1>
      <p className="text-center sm:w-[80%] lg:w-[30%] mx-auto sm:text-lg lg:text-xl text-white/50">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeader;
