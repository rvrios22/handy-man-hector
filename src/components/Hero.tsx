import React from "react";
import CTAButton from "./CTAButton";
import { Image } from "@heroui/react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:flex-row">
      <div className="my-8 flex w-full flex-col items-center justify-center text-center lg:order-2 lg:w-1/2 lg:items-start lg:text-left">
        <h1 className="mb-4 text-4xl font-extrabold text-orange-500 lg:text-5xl">
          Need a Hand? We've Got You Covered!
        </h1>
        <p className="mb-4 max-w-lg text-lg md:text-xl">
          From junk removal to plumbing, handiwork to small demolitions, we
          handle the jobs you don't want to. Fast, reliable, and always
          professional.
        </p>
        <CTAButton />
      </div>
      <div className="flex w-full items-center justify-center lg:order-1 lg:w-1/2">
        <div className="mx-auto w-full overflow-clip rounded-lg object-cover object-center md:w-3/4 lg:m-4 lg:w-full">
          <Image
            src="./tempImg.webp"
            alt="A beautiful example image"
            width="1024"
            height="683"
            className="h-auto w-full rounded-lg border-1 border-gray-400 object-cover shadow-lg lg:h-[40vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
