import { useNavigate } from 'react-router-dom';
import CroppedImage from './CroppedImage';

export default function InfoBox({ imageSrc, alt, action, route, body, centerX = 50, centerY = 50 }) {
  const navigate = useNavigate();

  function imageClicked() {
    if (action) {
      action(imageSrc, alt);
    }
  }

  function openRoute() {
    if (route) {
      navigate(route);
    }
  }

  return (
    <div className="info-box">
      <CroppedImage
        imageSrc={imageSrc}
        alt={alt}
        action={imageClicked}
        centerX = {centerX}
        centerY = {centerY}
      />
      <div
        className={route ? "info-text" : "info-text-no-link"}
        onClick={openRoute}
      >
        <div className='infobox-body'>
          {body}
        </div>
      </div>
    </div>
  );
}