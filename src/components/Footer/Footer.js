import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div>
      <div style={{ height: "80px" }} className="">
        <footer className="mt-5 d-flex flex-md-row justify-content-md-between bg-secondary py-4 align-items-center flex-column justify-content-center container-fluid mx-auto">
          <div className="text-white ms-md-5 text-center mb-4 mb-md-0 ml-5">
            &copy; 2022  All Right Reserved
          </div>

        
        </footer>
      </div>
    </div>
  );
};

export default footer;
