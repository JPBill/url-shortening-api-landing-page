import React from "react";

const Cta = () => {
  return (
    <section className="cta mt-20 flex flex-col items-center justify-center gap-6 bg-darkviolet bg-cover bg-right-top bg-no-repeat py-24 md:mt-28 md:bg-left-top lg:mt-36 lg:gap-8">
      <h2 className="text-center text-3xl font-bold text-white lg:text-4xl">
        Boost your links today
      </h2>
      <button className="rounded-full bg-cyan px-8 py-2.5 font-semibold text-white transition-all hover:brightness-110 lg:px-10 lg:py-4 lg:text-lg">
        Get Started
      </button>
    </section>
  );
};

export default Cta;
