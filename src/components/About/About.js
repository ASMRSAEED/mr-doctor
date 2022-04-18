import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="row about ">
                <div className="col-lg-6   goal">
                    <h3>My Goal</h3>
                    <p className=''>"One of my life goals is to gain valuable industry knowledge and experience. As this is an entry-level position, I hope to work for the company to gain new skills and develop an idea of how I can contribute to the organization." "One of my life goals is to serve as a role model for those I'm managing.</p>

                </div>
                <div className="col-lg-6">
                    <img className='w-75 pt-5' src="https://i.ibb.co/qn9LZ4R/doctor1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;