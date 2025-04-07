import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function ParkingCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Parking spaces outside the house';
  const english = (<>
    <h3>Parking</h3>
    <p>There's plenty of private parking. You can lock the gate for extra security.</p>
  </>);
  
  const frenchAlt = "Places de parking à l'extérieur de la maison";
  const french = (<>
    <h3>Parking</h3>
    <p>Il y a beaucoup de parking privé. Vous pouvez verrouiller le portail pour plus de sécurité.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/oleron_parking_1600.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={50}
        centerY={70}
    />
  );
}