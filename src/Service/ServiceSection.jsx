import React from "react";
import box from "../../src/assets/box.svg";
import cart from "../../src/assets/cart.svg";
import puzzle from "../../src/assets/puzzle.svg";
import setting from "../../src/assets/setting.svg";
import current from "../../src/assets/current.svg";
import phone from "../../src/assets/phone.svg";

const servicesData = [
  {
    title: "UI Design",
    description: "Moments flow into one another, AI creates a seamless way",
    image: box,
  },
  {
    title: "Web Development",
    description:
      "Create website & responsive website by HTML/CSS, React & web-flow",
    image: cart,
  },
  {
    title: "Content Writing",
    description:
      "We give you the best content for your product that will attract customers",
    image: puzzle,
  },
  {
    title: "Branding",
    description:
      "Creating visual designs for websites and mobile applications with wireframes and prototypes",
    image: setting,
  },
  {
    title: "Illustration",
    description:
      "Create website & responsive website by HTML/CSS, React & web-flow",
    image: current,
  },
  {
    title: "Motion Graphics",
    description:
      "We give you the best content for your product that will attract customers",
    image: phone,
  },
];

const Card = ({ title, description, image }) => {
  return (
    <div className="services-card-box border border-[#d4d4d440] rounded-xl p-6 flex flex-col gap-y-3.5">
      <div className="h-16 w-16 flex items-center justify-center rounded-full">
        <img className="h-8 w-8" src={image} alt="" />
      </div>
      <div className="card-content flex flex-col gap-y-2">
        <h3 className="text-xl lg:text-2xl font-bold text-white">{title}</h3>
        <p className="text-base text-white font-medium">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-[#141416]">
      <div className="services max-w-5xl mx-auto px-0 py-10">
        <div className="services-headline flex flex-col lg:flex-row lg:items-center lg:justify-between px-10 lg:px-20 xl:px-0">
          <div className="mx-auto flex flex-col gap-y-2 justify-center items-center">
            <p className="text-[#8E85F4] text-[15px] max-w-xs sm:max-w-sm sm:mx-auto md:mr-0 md:ml-0 pb-2 lg:pb-4">
              Services
            </p>
            <h3 className="text-3xl lg:text-[44px] text-white text-center font-bold max-w-xs sm:max-w-4xl lg:max-w-sm sm:mx-auto md:mr-0 md:ml-0 leading-[1.15]">
              Quick simple yet powerful
            </h3>
            <p className="text-base text-white max-w-xs mr-auto sm:max-w-4xl text-center lg:max-w-sm lg:mx-auto lg:mr-0 lg:ml-auto leading-[1.7]">
              The expectation that productivity should always lead to tangible
              results or accomplishments.
            </p>
          </div>
        </div>
        <div className="services-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-20">
          {servicesData.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
