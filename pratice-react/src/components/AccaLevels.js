// src/AccaLevels.js
import React from 'react';
import './AccaLevels.css';

const AccaLevels = () => {
  return (
    <div className="acca-levels">
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
  );
};

export default AccaLevels;
