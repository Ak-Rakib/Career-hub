import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppliedJobData = ({ data }) => {
  const {
    icon,
    icon2,
    icon3,
    position,
    name,
    location,
    salary,
    time,
    venue,
    id,
  } = data;

  // --------------------------- Modal --------------------------
  const [modalIsOpen, setIsIOpen] = useState(false);
  const MyModal = () => {
    useEffect(() => {
      document.body.style.overflowY = "hidden"
      return () => {
        document.body.style.overflowY = "scroll"
      }
    },[]);
    return (
      <>
        <div className="modal-wrapper" onClick={() => setIsIOpen(false)}></div>
        <div className="modal-container">
          <h2 className="modal-header">Successfully Confirm!!</h2>
          <p className="modal-p">Stay Tuned, We will inform you via this website and Email</p>
          <button
            onClick={() => setIsIOpen(false)}
            className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Close
          </button>
        </div>
      </>
    );
  };
  // --------------------------------------------------------------

  return (
    <div>
      <div className="card card-side bg-base-200 shadow-xl md:m-10">
        <figure>
          <img className="ps-3" src={icon} alt="Company logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{position}</h2>
          <p className="mt-2 text-gray-400 font-normal">{name}</p>
          <div className="flex">
            <button className="btn btn-outline btn-info">{venue}</button>
            <button className="btn btn-outline btn-info ms-2">{time}</button>
          </div>
          <div className="flex">
            <img className="w-5" src={icon2} alt="" />{" "}
            <span className="text-gray-400 font-normal">{location}</span>
            <img className="w-5" src={icon3} alt="" />{" "}
            <span className="text-gray-400 font-normal">{salary}</span>
          </div>
          <div className="card-actions flex justify-end items-center">
            <button
              onClick={() => setIsIOpen(true)}
              className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-500"
            >
              confirm
            </button>

            <button className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-500">
              <Link to="/">Remove</Link>
            </button>
          </div>
        </div>
      </div>
      <div>{modalIsOpen && <MyModal />}</div>
    </div>
  );
};

// ReactDOM.render(setAppElement);
export default AppliedJobData;
