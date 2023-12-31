import React from "react";
import vector from "../../../assets/All Images/Vector.png";
import vector1 from "../../../assets/All Images/Vector-1.png";
import { useLoaderData } from "react-router-dom";
import AppliedJobData from "../AppliedJobData/AppliedJobData";

const BannerChangeAppliedJob = () => {
   const {newDetailsArray} = useLoaderData()
  return (
    <div>
      <div className="relative bg-base-200 h-64 mb-28 flex items-center justify-center">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Applied Jobs
        </h1>
        <img
          src={vector1}
          alt=""
          className="absolute top-0 right-0 h-24 w-24"
        />
        <img
          src={vector}
          alt=""
          className="absolute bottom-0 left-0 h-24 w-24"
        />
      </div>
      <div className="md:m-10">
        {
          newDetailsArray.map(data => <AppliedJobData
            key={data.id}
            data = {data}
          >
          </AppliedJobData>)
        }
      </div>
    </div>
  );
};

export default BannerChangeAppliedJob;
