
import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function GuestBedroomCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Light and airy bedroom. Double bed. Glass doors opening onto an outdoor terrace, with view of trees behind';
  const english = (<>
    <h3>Guest bedroom (Ch4)</h3>
    <p>This ground floor bedroom opens directly onto the patio - giving you great views of the garden and the woods behind.</p>
    <p>This bedroom also benefits from its own en-suite bathroom.</p>
  </>);
  
  const frenchAlt = "Chambre lumineuse et aérée. Grand lit. Portes vitrées ouvrant sur une terrasse extérieure, avec vue sur les arbres derrière";
  const french = (<>
    <h3>Chambre du rez-de-chaussée (Ch4)</h3>
    <p>Avec son accès direct sur la terrasse, cette belle chambre a aussi sa propre salle de douche.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_guest_bedroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={0}
        centerY={100}
    />
  );
}