import React from "react";
import { Link } from "react-router-dom";

const ShowFeatureJob = ({ job }) => {
  const { icon, icon2, icon3, position, name, location, salary, time, venue } =
    job;
  console.log(time, venue);
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <img className="w-20" src={icon} alt="" />
          <h2 className="card-title">{position}</h2>
          <p className="text-gray-400 font-normal">{name}</p>
          <div className="flex">
            <button className="btn btn-outline btn-info">{venue}</button>
            <button className="btn btn-outline btn-info ms-2">{time}</button>
          </div>
          <div className="flex justify-between">
            <img className="w-5" src={icon2} alt="" />{" "}
            <span className="text-gray-400 font-normal">{location}</span>
            <img className="w-5" src={icon3} alt="" />{" "}
            <span className="text-gray-400 font-normal">{salary}</span>
          </div>
          <div className="card-actions">
            <Link
              to="/showDetails"
              className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-500"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeatureJob;
