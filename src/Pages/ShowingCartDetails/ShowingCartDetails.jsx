import React from "react";
import money from "../../assets/Icons/Frame.png";
import job from "../../assets/Icons/Frame-1.png";
import pimg from "../../assets/Icons/Frame-2.png";
import mail from "../../assets/Icons/Frame-3.png";
import location from "../../assets/Icons/Frame-4.png";
import { Link } from "react-router-dom";
import { addToDb } from "../../Utilities/fakeDb";

const ShowingCartDetails = ({ data }) => {
    const handleJobClick = (id) => {
        addToDb(id);
      };
  const {
    description,
    responsibility,
    education,
    experiences,
    salary,
    position,
    phone,
    email,
    address,
    id
  } = data;
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <h1 className="mb-5">
              <span className="font-bold">Job Description:</span>
              <span className="mt-2 text-gray-400 font-normal">
                {description}
              </span>
            </h1>
            <h1 className="mb-5">
              <span className="font-bold">Job Responsibility:</span>
              <span className="mt-2 text-gray-400 font-normal">
                {responsibility}
              </span>
            </h1>
            <h1 className="mb-5">
              <span className="font-bold">Educational Requirement:</span> <br />
              <span className="mt-2 text-gray-400 font-normal">
                {education}
              </span>
            </h1>
            <h1 className="mb-5">
              <span className="font-bold">Experience:</span> <br />
              <span className="mt-2 text-gray-400 font-normal">
                {experiences}
              </span>
            </h1>
          </div>
          <div>
            <div className="bg-base-200 w-96 h-96 p-5">
              <p className="font-bold border-b-2 border-b-black pb-5">
                Job Details
              </p>
              <ul>
                <li className="flex items-center mt-5">
                  <img className="w-5" src={money} alt="" />{" "}
                  <span className="font-bold  text-gray-500">
                    Salary:{" "}
                    <span className="mt-2 text-gray-400 font-normal">
                      {salary}
                    </span>
                  </span>{" "}
                </li>
                <li className="flex items-center mt-5">
                  <img className="w-5" src={job} alt="" />{" "}
                  <span className="font-bold  text-gray-500">
                    Job Title:{" "}
                    <span className="mt-2 text-gray-400 font-normal">
                      {position}
                    </span>
                  </span>{" "}
                </li>
              </ul>
              <p className="font-bold border-b-2 border-b-black pb-5 pt-5">
                Contact Information
              </p>
              <ul>
                <li className="flex items-center mt-5">
                  <img className="w-5" src={pimg} alt="" />{" "}
                  <span className="font-bold  text-gray-500">
                    Phone:{" "}
                    <span className="mt-2 text-gray-400 font-normal">
                      {phone}
                    </span>
                  </span>{" "}
                </li>
                <li className="flex items-center mt-5">
                  <img className="w-5" src={mail} alt="" />{" "}
                  <span className="font-bold  text-gray-500">
                    Email:{" "}
                    <span className="mt-2 text-gray-400 font-normal">
                      {email}
                    </span>
                  </span>{" "}
                </li>
                <li className="flex items-center mt-5">
                  <img className="w-5" src={location} alt="" />{" "}
                  <span className="font-bold  text-gray-500">
                    Address:{" "}
                    <span className="mt-2 text-gray-400 font-normal">
                      {address}
                    </span>
                  </span>{" "}
                </li>
              </ul>
            </div>
            <Link to="/appliedJob"
                onClick={() => handleJobClick(id)}
            >
              <button className="btn mt-5 font-bold border-0 bg-gradient-to-r from-blue-500 to-purple-500">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingCartDetails;
