import React from "react";
import CTAButton from "./CTAButton";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:flex-row">
      {/* Right side: Call to Action */}
      <div className="my-8 flex w-full flex-col items-center justify-center text-center lg:order-2 lg:w-1/2 lg:items-start lg:text-left">
        <h1 className="mb-4 text-4xl font-extrabold text-orange-500 lg:text-5xl">
          Need a Hand? We've Got You Covered!
        </h1>
        <p className="mb-8 max-w-lg text-lg md:text-xl">
          From junk removal to plumbing, handiwork to small demolitions, we
          handle the jobs you don't want to. Fast, reliable, and always
          professional.
        </p>
        <CTAButton />
      </div>
      {/* Left side: Image */}
      <div className="flex h-80 w-full items-center justify-center p-4 md:h-96 lg:order-1 lg:h-full lg:w-1/2">
        <img
          src="./tempImg.webp"
          alt="Junk Removal, Handyman & Plumbing Services"
          className="h-full w-full object-cover object-center lg:rounded-br-3xl" // Rounded corner for style
        />
      </div>
    </section>
  );
};

export default Hero;
