// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, message }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{message}</h2>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
