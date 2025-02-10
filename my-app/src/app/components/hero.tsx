"use client";
import React from "react";
import Image from "next/image";
import Pfp from "@/app/assets/pfp.webp";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 border-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded w-[25rem]"
            alt="hero"
            src={Pfp}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web developer..", "UI/UX Desinger..!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[200px] h-[2px] bg-slate-700 "></div>
          <br />
          <p className="flex flex-wrap mb-8 leading-relaxed ">
            "I’m not just a designer/developer. I’m a problem solver, constantly
            finding innovative ways to bring ideas to life." "What drives me?
            The thrill of creating something beautiful and functional from
            scratch.
          </p>

          <div className="flex justify-center">
          
            <Link href="#contact">

              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
