import { useNavigate } from 'react-router-dom';
import CroppedImage from './CroppedImage';

export default function InfoBox({imageSrc, alt, action, route, body}) {
  const navigate = useNavigate();
  
  function imageClicked() {
    action(imageSrc, alt);
  }
  
  function openRoute() {
    console.log(`Routing to ${route}`);
    navigate(route);
  }
  
  return (
    <>
      <div className='info-box'>
        <CroppedImage imageSrc={imageSrc}
                      alt={alt}
                      action={imageClicked}
        />
        <div
          className='info-text'
          dangerouslySetInnerHTML={{ __html: body }}
          onClick={openRoute}
        />
      </div>
    </>
  );
}