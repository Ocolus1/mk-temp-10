import React from "react";
import greenGauge from "../../src/assets/green-gauge.svg";
import darkGreenGauge from "../../src/assets/darkgreen-gauge.svg";
import blueGauge from "../../src/assets/purple-gauge.svg";

const gauges = [
  {
    src: greenGauge,
    label: "Product sales",
    description: "Every moment will be notified for user in a flash",
  },
  {
    src: darkGreenGauge,
    label: "Product sales",
    description: "Every moment will be notified for user in a flash",
  },
  {
    src: blueGauge,
    label: "Product sales",
    description: "Every moment will be notified for user in a flash",
  },
];

export default function GrowthStatus() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-center gap-x-10 py-10">
      {gauges.map((gauge, index) => (
        <div
          className="flex flex-col gap-y-2 items-center justify-center"
          key={index}
        >
          <img
            className="pb-5 w-32 h-32 md:h-48 md:w-48"
            src={gauge.src}
            alt=""
          />
          <p className="text-white">{gauge.label}</p>
          <p className="max-w-[14rem] text-sm text-slate-400/70 mx-auto text-center">
            {gauge.description}
          </p>
        </div>
      ))}
    </div>
  );
}
