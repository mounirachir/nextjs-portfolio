import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow[#2a0e61]/50 bg-[#03001417] backdrop:-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="md:text-sm font-bold ml-[10px] hidden lg:block text-gray-300">
            Mounir Achir
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex w-full h-auto items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a className=" cursor-pointer" href="#about-me">
              Home
            </a>
            <a className="cursor-pointer" href="#skills">
              Skills
            </a>
            <a className="cursor-pointer" href="#projects">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href="https://www.instagram.com/mounir___achir/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                alt={social.name}
                src={social.src}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
