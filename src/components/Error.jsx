export default function Error({ errorMessage }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button">
          <i className="fa fa-window-close"></i>
        </span>
        <p className="error-message">{errorMessage}</p>
      </div>
    </div>
  );
}