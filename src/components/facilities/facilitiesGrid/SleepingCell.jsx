import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function SleepingCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A double bed and a set of drawers. View of the woods and the solarium through patio doors.';
  const english = `
    <h3>Sleeping</h3>
    <p>The house can comfortably sleep up to nine people.</p>
    <p>The main, guest and red bedrooms all have double beds. The front bedroom has three beds. The lounge has a double sofa bed. If you have camping mattresses, tents, hammocks or any other way to sleep more people then please feel free.</p>
    <p>If you don't want to bring your own bedding then it can be rented through our concierge service.</p>
  `;
  
  const frenchAlt = "Un lit double et un ensemble de tiroirs. Vue sur le boisé et le solarium par les portes patio.";
  const french = `
    <h3>Couchage</h3>
    <p>Les 4 chambres fournissent du couchage pour 9 personnes (3 chambres avec lit double, une chambre avec 1 lit gigogne et 1 lit supplémentaire) et le salon a un canapé–lit.</p>
    <p>Si vous ne voulez pas d'apporter votre propre literie alors il peut être loué par notre service de conciergerie.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron_master_bedroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}