import React from "react";
import grow from "../../src/assets/grow.svg";
import GrowthStatus from "./GrowthStatus";

export default function GrowthSection() {
  return (
    <section className="bg-[#141416]">
      <div className="growth max-w-5xl mx-auto px-0 py-10">
        <div className="mx-auto flex flex-col gap-y-2 justify-center items-center">
          <p className="text-[#8E85F4] text-[15px] max-w-xs sm:max-w-sm sm:mx-auto md:mr-0 md:ml-0 pb-2 lg:pb-4">
            GROW WITH US
          </p>
          <h3 className="text-3xl lg:text-[44px] text-white text-center font-bold max-w-xs sm:max-w-4xl lg:max-w-sm sm:mx-auto md:mr-0 md:ml-0 leading-[1.15]">
            Quick simple yet powerful
          </h3>
          <p className="text-base text-white max-w-xs sm:max-w-4xl text-center lg:max-w-sm mx-auto leading-[1.7]">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
        </div>
        <div className="flex items-center justify-center py-10">
          <img src={grow} alt="" />
        </div>
        <div className="mx-auto flex flex-col gap-y-2 justify-center items-center px-10">
          <p className="text-[#8E85F4] text-[15px] max-w-xs sm:max-w-sm sm:mx-auto md:mr-0 md:ml-0 pb-2 lg:pb-4">
            SALES & GROWTH
          </p>
          <h3 className="text-3xl lg:text-[44px] text-white text-center font-bold max-w-xs sm:max-w-4xl lg:max-w-sm sm:mx-auto md:mr-0 md:ml-0 leading-[1.15]">
            More power for your reach
          </h3>
          <p className="text-base md:max-w-lg text-white max-w-xs sm:max-w-4xl text-center lg:max-w-sm mx-auto leading-[1.7]">
            We are always motivated to make space more safe & make opportunities
            expand with your business to make it more complex
          </p>
        </div>
        <GrowthStatus />
      </div>
    </section>
  );
}
