import React from "react";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-300 border-2">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <VscAccount className="text-xl text-purple-600" />
            <span className="ml-3 text-xl font-extrabold">HAFSA </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Hafsa Sultan
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hafsa-sultan-45a6b6334/"
              className="text-gray-500"
            >
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
