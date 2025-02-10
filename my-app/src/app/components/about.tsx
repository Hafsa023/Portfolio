import React from "react";
import Image from "next/image";
import Pfp from "@/app/assets/pfp.webp";


const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>

            <p className="flex flex-wrap mb-8 leading-relaxed">
              <b> Matriculation (Completed in 2024) </b>
              Completed high school education (Matriculation)..
              <b>Intermediate (Current) </b>
              Currently pursuing Intermediate in Pre-Medical, focusing on
              subjects like Biology, Chemistry, and Physics to prepare for
              further studies in medicine or related fields.
              <b> Web Development Course (Ongoing) </b>
              Currently enrolled in a Web Development course under the Governor
              Sindh Initiative. Learning key skills such as HTML, CSS,
              JavaScript, and front-end development, with plans to expand into
              back-end technologies..
            </p>
            <div className="flex justify-center">

              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View CV
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded  w-[25rem]"
              alt="hero"
              src={Pfp}
            />
          </div> 
        </div>
      </section>
    </div>
  );
};

export default About;














