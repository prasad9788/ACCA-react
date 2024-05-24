// src/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header-section">
        <p>Paragraph 1 text</p>
        <p>Paragraph 2 text</p>
      </header>
      <section className="content-section">
        <div className="service-block">
          <h3>Service 1</h3>
        </div>
        <div className="service-block">
          <h3>Service 2</h3>
        </div>
        <div className="service-block">
          <h3>Service 3</h3>
        </div>
        <div className="service-block">
          <h3>Service 4</h3>
        </div>
        {/* Add more service blocks as needed */}
      </section>
      <section className="cta-section">
        <p>Call to action text</p>
        <button>Button text</button>
      </section>
    </div>
  );
};

export default LandingPage;
