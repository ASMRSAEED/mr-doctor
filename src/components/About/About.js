import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="row about ">
                <div className="col-lg-6 future-plan">
                    <h1><u>MY FUTURE PLAN</u></h1>
                    <p className='plan-details'><b>I am an entry-level Web developer and still learning new technology every day. My future goal is to become an expert in the web development sector and learn new technology and language day by day. This year I will only focus on my learning web development. Towards the end of this year, I will try to get a job in tech companies outside the country. I want to work at a prestigious tech company. Also, I have a lot of desire to work with Programming Hero.</b></p>

                </div>
                <div className="col-lg-6">
                    <img className='w-75 pt-5' src="https://i.ibb.co/F32JG4z/my-pic.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;