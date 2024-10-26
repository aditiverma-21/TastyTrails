import React from "react";
import food from "../assets/Images/food404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-stretch">
      <div className="container flex flex-col items-center justify-center px-5 text-gray-700">
        <div className="md:flex md:flex-row md:items-center md:justify-center">
          <div className="max-w-md mb-8 md:mb-0">
            <div className="text-7xl font-dark font-[Merriweather] font-bold text-red-700">404</div>
            <p className="text-2xl mt-8 mb-8 md:text-3xl font-[Merriweather] font-light leading-normal">
              Sorry! <br /> we couldn't find this page.
            </p>

            <p className="mt-8 mb-8 hidden md:block">
              But don't worry, you can find plenty of other things on our homepage.
            </p>
            <Link
              to="/"
              className="inline-flex items-center hidden md:inline bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-white transition-all"
            >
              Back To Homepage
            </Link>
          </div>

          <div className="md:ml-8">
            <img src={food} alt="404 food" />
          </div>
        </div>

        {/* Text and Button for smaller screens, displayed below the image */}
        <div className="mt-8 text-center md:hidden">
          <p className="mt-8 mb-8">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
         <Link
            to="/"
            className="inline-flex items-center bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-white transition-all"
          >
            Back To Homepage
          </Link>
        </div>
         
      </div>
      
    </div>
  );
};

export default NotFound;
