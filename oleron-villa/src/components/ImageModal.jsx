import React, { useState } from 'react';

export default function ImageModal({ onClose, imageSrc, alt }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          {/* &times; */}
          <i className="fa fa-window-close"></i>
        </span>
        <img src={imageSrc} alt={alt} className="modal-image" />
      </div>
    </div>
  );
}