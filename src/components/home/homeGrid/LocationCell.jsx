import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function LocationCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = "Small Google Maps, showing Oleron Villa located on Ile d'Oleron off France's Atlantic coast";
  const english = `
    <h3>Location</h3>
    <p>See where Oléron Villa is located.</p>
  `;
  
  const frenchAlt = "Petite carte Google Maps, montrant la villa d'Oléron située sur l'île d'Oléron, au large de la côte atlantique de la France";
  const french = `
    <h3>Situation</h3>
    <p>Pour situer l'île d'Oléron.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/location/oleron-map.png"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        route={language === "fr" ? "/location-fr" : "/location"}
        body={language === "fr" ? french : english}
    />
  );
}