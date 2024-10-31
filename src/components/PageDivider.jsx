import React, { Fragment } from "react";
import sparkle from "@/assets/icons/sparkle.svg";
import Image from "next/image";

const PageDivider = () => {
  const contents = [
    "informative",
    "user-friendly",
    "accessable",
    "secure",
    "scalable",
    "responsive",
    "maintainable",
  ];
  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:my-10 lg:my-20 overflow-x-clip w-full from-emerald-500 to-sky-500 bg-gradient-to-r -rotate-3">
      <div className="flex gap-5 px-5 flex-row items-center justify-between h-16 animate-move-left [animation-duration:20s]">
        {[...new Array(3).fill(0)].map((_, index) => (
          <Fragment key={index}>
            {contents.map((content, index) => (
              <div key={index} className="flex flex-none items-center">
                <h1 className="text-gray-900 font-semibold mr-1 capitalize">
                  {content}
                </h1>
                <div>
                  <Image src={sparkle} alt="sparkel" />
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default PageDivider;
