import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function BathroomCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Bathroom with a double sink and a walkin-shower';
  const english = (<>
    <h3>Bathroom</h3>
    <p>All of the showers are of the Italian/walk-in style, no curtains or stuffy plastic boxes.</p>
    <p>The main family bathroom has a shower, basin a towel drier (as well a hairdryer). The main bedroom has an en-suite bathroom with shower, WC & basin. The guest bedroom has a shower and basin (as well as a WC next door). There are also 2 further WCs.</p>
    <p>Note that our developers dubbed this the 'English house' because of the generous number of bathrroms!</p>
  </>);
  
  const frenchAlt = "Salle de bain avec double vasque et douche à l'italienne";
  const french = (<>≈
    <h3>Salle d'eau</h3>
    <p>La maison est équipée de trois salles d'eau avec douches « italiennes », de lavabos modernes avec rangement dessous, ainsi que 3 WC (2 WC indépendants et 1 dans une des salle d'eau).</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron_bathroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}