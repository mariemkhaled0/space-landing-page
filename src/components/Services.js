import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../assets/wave Gif.gif";
const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <section className=" md:px-10 bg-black m-auto bg-primary ">
      <div className="w-10/12 m-auto">
        <div className="grid  sm:grid-cols-3  md:grid-cols-3 m-auto relative z-10 gap-5 sm:gap-4 md:gap-7 text-white  justify-center">
          {ServiceData.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className=" w-full min-h-[180px] mx-auto  backdrop-blur-sm py-7 px-3 space-y-2 rounded-xl bg-sky-900/60  md:w-5/5 text-center  flex flex-col justify-center items-center "
              key={index}
            >
              <div className="text-center ">{item.icon}</div>
              <p className="font-bold text-2xl">{item.title}</p>
              <p className=" text-2xl">{item.content}</p>
              <p className="text-sm text-center w-5/6">{item.description}</p>
            </div>
          ))}
        </div>
        <img
          className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          alt="wave"
          src={wave}
        />
      </div>
    </section>
  );
};

export default Services;
