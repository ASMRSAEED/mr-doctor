import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <div style={{ height: "60px" }} className="">
        <footer className="mt-5 d-flex flex-md-row justify-content-md-between bg-secondary py-4 align-items-center flex-column justify-content-center container-fluid mx-auto">
          <div className="text-black ms-md-5 text-center mb-4 mb-md-0 ml-5">
            <b>Mr. Doctor &copy; 2022  All Right Reserved</b>
          </div>
          <div className="address">
            <h3><b>Address:- Radhika Comples(1st Floor),
              Victoria Road, Tangail-1900</b></h3>
            <h2><b>Phone Number:- +8801706 000000</b></h2>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default footer;
