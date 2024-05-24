// src/MainContent.js
import React, { useState } from 'react';
import Modal from './Modal';
import './MainContent.css';

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRequestCallBackClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main-content">
      <Modal show={showModal} handleClose={handleCloseModal} message="Your request has been submitted successfully!" />
      <div className="acca-container">
        <div className="acca-info">
          <h1>Become ACCA in 18 months</h1>
          <p>Here is some information about the ACCA course. It is an excellent opportunity for those looking to advance their career in accounting and finance. The course offers a comprehensive curriculum designed to provide you with the skills and knowledge required to succeed in the field.</p>
          <div className="cta-buttons">
            <button className="brochure-button">Download Brochure</button>
            <button className="review-courses-button">Review Courses</button>
          </div>
        </div>
        <div className="request-callback">
          <h2>Request Call Back</h2>
          <form onSubmit={handleRequestCallBackClick}>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label>Phone:</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="reasons">
          <div className="reason-box">
            <i className="icon icon-faculty"></i>
            <h3>Expert Faculty</h3>
            <p>Learn from industry experts with years of experience.</p>
          </div>
          <div className="reason-box">
            <i className="icon icon-package"></i>
            <h3>Successful Package</h3>
            <p>Our comprehensive packages ensure success.</p>
          </div>
          <div className="reason-box">
            <i className="icon icon-placement"></i>
            <h3>Placements</h3>
            <p>Get placed in top companies with our placement assistance.</p>
          </div>
        </div>
      </div>
      <div className="course-details">
        <div className="course-detail-box">
          <h4>Length of the Course</h4>
          <p>18 months</p>
        </div>
        <div className="course-detail-box">
          <h4>Duration of the Course</h4>
          <p>Part-time or Full-time options available</p>
        </div>
        <div className="course-detail-box">
          <h4>Course Exams</h4>
          <p>Monthly assessments and final exams</p>
        </div>
        <div className="course-detail-box">
          <h4>Examination Guidance</h4>
          <p>Expert guidance for all exams</p>
        </div>
      </div>
      <div id="acca-levels" className="acca-levels">
        <h1>What will you learn in ACCA?</h1>
        <div className="levels-container">
          <div className="level-box">
            <h2>Knowledge Level</h2>
            <p>This level includes 3 papers that cover essential knowledge in accounting.</p>
          </div>
          <div className="level-box">
            <h2>Skill Level</h2>
            <p>This level includes 6 papers that develop the skills required for effective financial management.</p>
          </div>
          <div className="level-box">
            <h2>Professional Level</h2>
            <p>This level includes 4 papers that focus on advanced professional skills and ethics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
