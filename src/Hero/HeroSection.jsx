import React from "react";
import Navbar from "../Navbar";
import herosvg from "../assets/herosection-rightside.png";

function HeroSection() {
  return (
    <section className="hero__section">
      <Navbar />
      <div className="hero__container px-7 lg:px-10 max-w-5xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
        <div className="hero-content lg:w-2/3 lg:pr-5 flex flex-col gap-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left leading-[1.2] max-w-xl mx-auto lg:mx-0 lg:max-w-full font-semibold text-black">
            Create a quick CRM specifically to manage flow
          </h1>
          <p className="text-base md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full text-center lg:text-left">
            Get a clear and fluid unbiased audit for your social media marketing
            investment using space
          </p>
          <button className="bg-[#4A3BFF] w-full md:w-2/3 mx-auto lg:mx-0 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200  text-white font-semibold text-sm lg:text-base rounded-md px-5 py-3">
            Get started for free
          </button>
        </div>
        <div className="hero-image relative isolate md:px-5 lg:px-0 w-full lg:w-2/3 rounded-3xl md:pt-2 lg:pt-0">
          <img
            className="h-auto rounded-3xl w-full lg:h-auto md:w-[400px] md:mx-auto lg:w-[800px] xl:w-[1024px] drop-shadow-xl relative"
            src={herosvg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
