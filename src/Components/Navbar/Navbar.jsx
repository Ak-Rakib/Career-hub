import React from "react";
import logo from "../../assets/Logo/main-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">
                  <img className="w-20" src={logo} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/appliedJob">Applied Jobs</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="w-20 hidden sm:block" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-blue-500 hover:to-purple-500 text-transparent bg-clip-text">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-blue-500 hover:to-purple-500 text-transparent bg-clip-text">
              <Link to="/appliedJob">Applied Jobs</Link>
            </li>
            <li className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-blue-500 hover:to-purple-500 text-transparent bg-clip-text">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn border-0 px-4 py-2 rounded-md text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500">
            Star Applying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
