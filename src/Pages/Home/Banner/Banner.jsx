import React from "react";
import Image from "../../../assets/All Images/banner-img.png";

const Banner = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-200 mb-5 rounded-none">
        <figure>
          <img src={Image} alt="Album" />
        </figure>
        <div className="card-body mt-12">
          <h1 className="text-7xl font-bold">One Step Closer </h1>
          <h1 className="text-6xl font-bold">To Your</h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Dream Job
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          {/* <button className="btn border-0  py-2 rounded-md text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
