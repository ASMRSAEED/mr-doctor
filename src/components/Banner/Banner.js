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
                <h1 className="fw-bold text-info mt-5">
                  {" "}
                  <span className="text-black ms-5 ps-5">Dr. ASMR SAEED</span>
                </h1>
                <p className="details ps-5 mt-5">
                  <b>MS, FRCS</b>
                  <br />
                  Founder, Chairman and Senior Consultant Cardiac Surgeon
                  <br /><br />
                  <b>SPECIALITY</b>
                  <br />
                  Cardiac Surgery - Adult, Cardiac Surgery - Paediatric

                  HOSPITAL
                  Bangalore - Narayana Institute of Cardiac Sciences, Bommasandra
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center align-items-center mt-3">
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
                  <span className="text-black ms-5 ps-1">Dr. ASMR SAEED</span>
                </h1>
                <p className="details ps-5 mt-5">
                  <b>MS, FRCS</b>
                  <br />
                  Founder, Chairman and Senior Consultant Cardiac Surgeon
                  <br /><br />
                  <b>SPECIALITY</b>
                  <br />
                  Cardiac Surgery - Adult, Cardiac Surgery - Paediatric

                  HOSPITAL
                  Bangalore - Narayana Institute of Cardiac Sciences, Bommasandra
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center align-items-center mt-3">
                <img
                  src={image}
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
