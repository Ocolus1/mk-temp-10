import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function CtaSection() {
  return (
    <section className="bg-[#141416]">
      <section className="cta__section max-w-5xl mx-auto py-24 px-5 lg:px-0">
        <div
          className=" bg-[#434345] p-10 rounded-2xl
           mx-auto flex flex-col gap-y-5 justify-center items-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Join our beta program for more features
          </h3>
          <div className="input-form max-w-2xl mx-auto w-full flex flex-col md:flex-row gap-y-2 items-center justify-center lg:justify-start gap-x-5 lg:gap-x-5 mt-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-2.5 px-5 placeholder:text-sm rounded-lg bg-white/20 border border-zinc-400/40 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200"
              />
            </div>
            <button className="bg-white w-full md:w-1/3 hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200 lg:w-1/3 text-zinc-800 text-sm rounded-lg px-5 py-2.5 shadow-md group font-clash font-[500]">
              Send an Email
              <AiOutlineArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CtaSection;
