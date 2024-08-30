export default function ImageModal({ onClose, imageSrc, altText }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          <i className="fa fa-window-close"></i>
        </span>
        <img src={imageSrc} alt={altText} className="modal-image" />
      </div>
    </div>
  );
}