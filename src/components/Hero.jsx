import React from "react";
import illustration from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-6 overflow-hidden px-4 md:gap-16 lg:flex-row lg:items-center lg:justify-between lg:px-20 xl:gap-0 xl:px-36">
      <div className="flex flex-col items-center lg:w-[60%] lg:items-start">
        <h1 className="w-[280px] text-center text-4xl font-bold leading-[1.15] tracking-tight text-verydarkblue md:w-[400px] md:text-5xl lg:text-left xl:w-[600px] xl:text-6xl">
          More than just shorter links
        </h1>
        <p className="mt-4 w-[280px] text-center font-medium text-grayishviolet md:w-[340px] lg:w-[400px] lg:text-left xl:w-[500px]">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mt-6 rounded-full bg-cyan px-8 py-3 text-sm font-bold text-white transition-all hover:brightness-110">
          Get Started
        </button>
      </div>
      <div className="w-[145%] lg:-mr-48 lg:w-[80%] xl:-mr-64 xl:w-[70%]">
        <img src={illustration} alt="working illustration" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
