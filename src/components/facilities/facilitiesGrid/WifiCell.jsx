import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function WifiCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Large dining table, with kitchen in the background';
  const english = (<>
    <h3>Internet</h3>
    <p>The whole house and garden has fast (900+ Mbps) wired and wireless (WiFi) internet.</p>
  </>);
  
  const frenchAlt = "Grande table à manger, avec cuisine en arrière-plan";
  const french = (<>
    <h3>Internet</h3>
    <p>Toute la maison et le jardin disposent d'une connexion Internet filaire et sans fil (WiFi) rapide (900+ Mbps).</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron-wifi.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={40}
        centerY={50}
    />
  );
}