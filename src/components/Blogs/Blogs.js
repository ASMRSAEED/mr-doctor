import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='questions' style={{ width: "90%", margin: "auto" }}>

      <h5 className="question-1 fw-bold text-start pt-4">
        {" "}
        Question-1. Difference Between Authorization  and Authentication:
      </h5>
      <p className="text-start">
        {" "}
        <span className='answer'>Answer:-</span> <b>Authentication is the process of verifying someone, whereas Authorization is the process of verifying specific applications, files, and data a user has access to. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</b>
      </p>

      <h5 className="question-3 fw-bold text-start pt-4">
        Question-2. Why are you using firebase? What other options do you have to implement authentication?
      </h5>
      <p className=" text-start ">
        <span className='answer'>Answer:-</span> <b>I am using firebase because firebase authentication because Google Firebase is more trustable than others and easy to use. Also, Firebase provides backend services, easy-to-use SDKs. Ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers. Also, popular federated identity providers like Google, Facebook and Twitter.</b>
      </p>
      <h5 className="question-2 fw-bold text-start pt-4">
        Question-3. What other services does firebase provide other than authentication:
      </h5>
      <p className='text-start'>
        <span className='answer'>Answer:-</span> <b>There are many services which provide Firebase without authentication  Most useful of them are:</b>
        <br />
        <b>
          <ul>
            <li>Cloud Firestore.</li>
            <li>Cloud Functions.</li>
            <li>Hosting.</li>
            <li>Cloud Storage.</li>
            <li>Google Analytics.</li>
            <li>Predictions.</li>
            <li>Cloud Messaging.</li>
          </ul>
        </b>
      </p>


    </div>
  );
};

export default Blogs;