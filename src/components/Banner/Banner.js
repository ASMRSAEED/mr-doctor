import React from "react";
import image from '../../image/doctor1.png'
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active first-item ">
            <div className="row">
              <div className="col-lg-7 ">
                <h1 className="fw-bold text-info ps-5 mt-5">
                  {" "}
                  <span className="text-black">Hello, I am Dr. ASMR SAEED</span>
                </h1>
                <p className="details ps-5 mt-5">
                  Over the course of my distinguished career being the personal Physician from 1998. Since its inception, NH has now grown to be one of India’s largest healthcare groups providing world-class, affordable, safe and quality care for all.
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt=""
                  style={{ width: "600px", height: "400px" }}
                />
              </div>
            </div>
          </div>
          <div class="carousel-item  first-item ">
            <div className="row">
              <div className="col-lg-7 ">
                <h1 className="fw-bold text-info ps-5 mt-5">
                  {" "}
                  <span className="text-black"> Hello, I am Dr. ASMR SAEED</span>
                </h1>
                <p className="details ps-5 mt-5">
                  Over the course of my distinguished career being the personal Physician from 1998. Since its inception, NH has now grown to be one of India’s largest healthcare groups providing world-class, affordable, safe and quality care for all.

                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  className='pe-5 pb-5'
                  alt=""
                  style={{ width: "600px", height: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
