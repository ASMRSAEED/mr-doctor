import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = (props) => {
    const { img, title, details, price } = props.obj
    return (
        <div className='col service-container'>
            <div className="card  shadow py-4 m-0 p-0" style={{ height: "500px" }} >
                <div>
                    <img src={img} className=" img-fluid ms-5 px-2" style={{ height: "200px" }} alt="..." />
                    <h5 className="card-title pt-4 fw-bold ms-5 text-success">{title}</h5>
                    <p className="card-text mx-3 ms-5 text-success ">{details}</p>
                    <h5 className="card-title pt-2 ms-5 text-success">Price: {price}</h5>
                    <Link to='/checkout' className="btn btn-success rounded py-2 mt-2 px-5 ms-5">BOOK NOW</Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;