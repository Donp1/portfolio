import React from "react";
import sparkle from "@/assets/icons/sparkle.svg";
import Image from "next/image";

const PageDivider = () => {
  const contents = [
    "informative",
    "user friendly",
    "accessable",
    "secure",
    "scalable",
    "responsive",
    "maintainable",
  ];
  return (
    <div className="py-20 overflow-x-clip w-full">
      <div className="marquee w-full flex flex-row items-center justify-between h-16 bg-gradient-to-r from-emerald-500 to-sky-500 -rotate-3">
        {contents.map((content, index) => (
          <div key={index} className="flex flex-row gap-5 w-full">
            <div className="flex gap-5 items-center w-full">
              <h1 className="text-gray-950 uppercase font-semibold text-lg">
                {content}
              </h1>
              <div className="rotate-45">
                <Image src={sparkle} alt="sparkle icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageDivider;
