import React, { Fragment } from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Image from "next/image";
import { testimonials } from "@/constants";

const TestimonialSection = () => {
  return (
    <section className="min-h-screen sm:pt-16 lg:pt-32" id="testimonial">
      <SectionHeader
        text1={"happy clients"}
        content={"What Clients Say About Me"}
        desc={
          "Dont't just take my words for it, see what my clients have to say about my work"
        }
      />
      <div className="w-[80%] mx-auto flex flex-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-5 hover:[animation-play-state:paused] mx-5 animate-move-left [animation-duration:1000s]">
          {[...new Array(20).fill(0)].map((_, index) => (
            <Fragment key={index}>
              {" "}
              {testimonials.map((testimonial, index) => (
                <div
                  className="hover:cursor-pointer hover:-rotate-1 py-5 transition duration-300"
                  key={index}
                >
                  <Card>
                    <div className="w-[500px] h-[150px] inset-0 space-y-5">
                      <div className="flex flex-row items-center gap-3">
                        <div className="size-14 flex items-center justify-center bg-gray-800 rounded-full">
                          <Image
                            className="inset-0 w-full"
                            src={testimonial.avatar}
                            alt="testimonial avatar"
                            quality={100}
                          />
                        </div>
                        <div className="space-y-1 inset-0">
                          <h1 className="capitalize font-medium tracking-wide text-lg">
                            {testimonial.name}
                          </h1>
                          <p className="text-white/50">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <div className="">{testimonial.text}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
