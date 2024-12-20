import React from "react";
import "./WelcomeModal.css";

const WelcomeModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal">
        <div className="welcome-modal-arrow"></div>
        <div className="welcome-modal-content">
          {message.split("\n").map((line, index) => (
            <p key={index} className="welcome-modal-message">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
