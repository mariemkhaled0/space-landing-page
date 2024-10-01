import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TfiAlignJustify } from "react-icons/tfi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 w-full bg-black/10 backdrop-blur-md text-white z-[100]"
    >
      <div className="flex justify-between items-center px-5 py-2 ">
        <div className="flex items-center">
          <img className="w-[50px]" alt="logo" src={logo} />
          <div className="font-bold text-3xl ml-2">TCJ-SPACE</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xl">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#galaxy">Galaxy</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#satellite">Satellite</a>
          </li>
        </ul>

        {/* Login Button */}
        <button className="hidden md:block text-white border-2 border-white px-3 py-1 rounded-md">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button onClick={handleNav} className="md:hidden ml-4 text-3xl">
          <TfiAlignJustify />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed  top-0 right-0 h-screen w-2/4 bg-black text-white z-50 transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute z-[100] top-2 text-white right-2"
          onClick={handleNav}
        >
          <MdClose size={20} />
        </button>

        <ul className="flex flex-col gap-6 text-xl mt-16 px-4">
          <li>
            <a className="hover:text-orange-700" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-orange-700" href="#galaxy">
              Galaxy
            </a>
          </li>
          <li>
            <a className="hover:text-orange-700" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-orange-700" href="#satellite">
              Satellite
            </a>
          </li>
        </ul>
        <button className="mt-4 hover:text-orange-700 text-white   px-3 py-1 rounded-md">
          Login
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed w-full h-full top-0 left-0 inset-0 bg-gray-900 bg-opacity-50"
          onClick={handleNav}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
