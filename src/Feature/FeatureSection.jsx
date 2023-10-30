import React from "react";
import heroImage1 from "../assets/heroImage-1.png";
import heroImage2 from "../assets/heroImage-2.png";
import heroImage3 from "../assets/heroImage-3.png";

function FeatureSection() {
  return (
    <section className="feature__section max-w-6xl px-7 lg:px-10 py-14 mx-auto ">
      <div className="flex items-center justify-center flex-col gap-y-2">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-xl mx-auto text-center">
          Updates & overviews for everyone
        </h2>
        <p className="max-w-sm mx-auto text-center">
          The expectation that productivity should always lead to tangible
          results or accomplishments.
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row flex-wrap gap-5 items-start justify-center p-10 max-w-6xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <div className="bg-[#F7F7F7] p-5 rounded-lg flex flex-col gap-y-2">
          <p className="font-semibold">Real-time updates</p>
          <img className="rounded-xl" src={heroImage1} alt="" />
        </div>

        <div className="bg-[#F7F7F7] p-5 rounded-lg mt-14 flex flex-col gap-y-2">
          <p className="text-center font-semibold">Total sales</p>
          <img className="rounded-xl" src={heroImage2} alt="" />
        </div>
        <div className="bg-[#F7F7F7] p-5 rounded-lg ">
          <p className="font-semibold">Real-time updates</p>
          <img className="rounded-xl" src={heroImage3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
