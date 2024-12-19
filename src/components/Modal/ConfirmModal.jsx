import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            YES
          </button>
          <button className="cancel-btn" onClick={onClose}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
