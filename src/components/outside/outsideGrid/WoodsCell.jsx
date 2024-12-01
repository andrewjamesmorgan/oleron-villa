import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function WoodsCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Aerial view of the house, showing just the forest between the house and the ocean.';
  const english = `
    <h3>Woods</h3>
    <p>The garden backs directly on to the woods - no cars or houses between you and the beach on the other side. Simply go through the side gate, turn left and just walk through the woods until you hit the beach.</p>
    <p>If you prefer to cycle then turn left onto the cycle path running parallel with the road and then turn left again when you hit the tarmac path.</p>
    <p>Whichever route you take, it's just a few traffic-free minutes to get to the sea.</p>
  `;
  
  const frenchAlt = "Vue aérienne de la maison, montrant juste la forêt entre la maison et l'océan.";
  const french = `
    <h3>Sentier forestier, direction… la plage</h3>
    <p>Le jardin donne directement sur la forêt. En sortant par le portillon, vous êtes sur le sentier qui conduit à la mer en une dizaine de minutes. Cette marche est toujours plus longue à cause des arrêts de dégustation mûres sauvages. Il n'y a pas de route accessible au voiture entre la maison et la mer, juste une belle forêt domaniale.</p>
    <p>Pour les adeptes de la bicyclette, vous pouvez aussi vous rendre à la plage en vélo, ca ne vous predra que quelques minutes et la piste cyclable passe devant la maison./p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/location/oleron-drone.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}