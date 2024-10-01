import React from "react";
import satelite from "../assets/satelite2.jpg";
const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 xl:pr-36 p-5  border-l-2 border-b-2 border-b-sky-800 border-l-sky-800">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="uppercase text-5xl"
            >
              Repidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              quasi dolorem. Necessitatibus, nesciunt beatae. Fugiat, corrupti
              veniam saepe praesentium nobis iure dolor distinctio ullam sed,
              explicabo quod beatae error eveniet.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-blue-500 hover:bg-blue-800 duration-500 p-2 rounded-md"
            >
              Learn more
            </button>
          </div>
          <div>
            <img data-aos="zoom-in" alt="img" src={satelite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
