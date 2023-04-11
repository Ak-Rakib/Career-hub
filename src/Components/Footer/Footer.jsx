import React from "react";
import logo from "../../assets/Logo/main-logo.png";
import Social from "../../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div>
            <img className="w-20 mb-5" src={logo} alt="" />
          </div>
          <p className="mb-5">
            ACME Industries Ltd.
            <br />
            There are many variations of passages of Lorem Ipsum <br /> , but the
            majority have suffered alteration in some form.
          </p>
          <div>
            <img src={Social} alt="" />
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Product</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
