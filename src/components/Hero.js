import React from "react";
import mountain from "../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full  z-50  text-white relative">
      <div className="h-full flex justify-center items-center pl-[4rem]">
        <div className="">
          <div className="space-y-5 ">
            <h1 data-aos="fade-up" className="text-5xl uppercase font-bold ">
              Orbite the earth
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className=" md:w-1/4 w-2/4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              similique eum voluptatem, soluta quidem assumenda fuga laborum
              optio! Maiores eveniet impedit consequuntur inventore, veniam
              labore vitae repellat ipsa perferendis illum.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-blue-500 hover:bg-blue-800 duration-500 p-2 rounded-md"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
        alt="mountain"
        src={mountain}
      />
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[30px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
};

export default Hero;
