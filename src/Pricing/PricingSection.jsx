import React from "react";

const pricingData = [
  {
    title: "Team",
    description: "For individuals that need advanced recording & editing.",
    price: "$9",
    innerWidth: "col-span-2",
    feature: [
      "Unlimited projects",
      "Unlimited storage",
      "Unlimited users",
      "Custom permissions",
    ],
    buttonColor: "bg-[#4A3BFF]",
    buttonTextColor: "text-white",
    backgroundColor: "bg-white",
    textColor: "text-slate-800",
  },
  {
    title: "Professional",
    description: "For teams that need advanced sharing & reporting.",
    price: "$39",
    innerWidth: "col-span-3",
    feature: [
      "Unlimited projects",
      "Unlimited storage",
      "Unlimited users",
      "Custom permissions",
    ],
    buttonColor: "bg-white",
    buttonTextColor: "text-[#4A3BFF]",
    backgroundColor: "bg-[#4A3BFF]",
    textColor: "text-white",
  },
];

function PricingSection() {
  return (
    <section className="bg-[#141416]">
      <section className="pricing__section max-w-5xl px-7 lg:px-20 py-10 lg:py-20 mx-auto flex flex-col gap-y-10">
        <div className="flex items-center justify-center flex-col gap-y-2">
          <h2 className="text-white text-2xl md:text--3xl lg:text-4xl font-bold">
            We give you the best Pricing
          </h2>
          <p className="text-slate-400/90 font-medium text-center max-w-lg mx-auto">
            Pricing plans for businesses at every stage of growth. Try our
            risk-free for 14 days. No credit card required.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 place-content-center">
          {pricingData.map((item) => (
            <div
              key={item.title}
              className={`pricing-section ${item.backgroundColor} ${item.innerWidth}  p-7 w-full flex flex-col items-center gap-y-5 justify-between border border-slate-500/20 rounded-2xl mx-auto`}
            >
              <div className="flex items-start justify-between gap-x-10">
                <div className="w-full lg:w-2/3">
                  <h2
                    className={` ${item.textColor} text-2xl md:text-3xl lg:text-left font-clash font-[600]`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={` ${item.textColor} mt-2 text-sm font-medium md:text-left `}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-3 w-1/3">
                  <p className={`${item.textColor} text-4xl font-semibold`}>
                    {item.price}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-details="Get started"
                className={`w-full py-2 px-5 ${item.buttonColor} ${item.buttonTextColor} active:scale-95 transition-all duration-150 ease-linear active:ring-1 font-semibold active:shadow-none active:ring-offset-2 active:ring-slate-600 rounded-md `}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default PricingSection;
