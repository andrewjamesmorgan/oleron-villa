import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function MasterBedroomCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Light and airy bedroom. Double bed. Chest of drawers. Glass doors opening onto an outdoor solarium, with view of trees behind';
  const english = (<>
    <h3>Master bedroom (Ch3)</h3>
    <p>The master bedroom is on the first floor and has views on 3 sides - including onto the woods.</p>
    <p>The bedroom includes an en-suite bathroom with walk-in shower, basin and WC.</p>
    <p>As a bonus this room opens directly onto the first floor terrace - the perfect location for a late night drink or a morning coffee; the terrace in turn has steps down into the garden.</p>
  </>);
  
  const frenchAlt = "Chambre lumineuse et aérée. Grand lit. Commode. Portes vitrées ouvrant sur un solarium extérieur, avec vue sur les arbres derrière";
  const french = (<>
    <h3>Chambre donnant sur le solarium (Ch3)</h3>
    <p>Une chambre spacieuse et lumineuse avec sa propre salle de douche. Vous voyez la forêt sans sortir de votre lit! Le matin, ouvrez les volets et la porte coulissante et profitez du solarium.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_master_bedroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={0}
        centerY={70}
    />
  );
}