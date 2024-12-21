import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function BathroomCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'White and green bathroom. Large white baisin with large drawers underneath. Large walk-in shower.';
  const english = (<>
    <h3>Bathrooms</h3>
    <p>The main family bathroom has a walk-in shower, basin and towel drier. A hair drier is provided.</p>
    <p>In addition, two of the bedrooms have en-suite bathrooms and there are two separate toilets.</p>
  </>);
  
  const frenchAlt = "Salle de bain blanche et verte. Grand baignoire blanc avec de grands tiroirs en dessous. Grande douche à l'italienne.";
  const french = (<>
    <h3>Salles d'eau</h3>
    <p>Les 3 salles d'eau sont équipées de douche «italienne» et de vasque sur meuble de salle de bain. Dans l'un de ces meubles, vous trouverez un seche-cheveux.</p>
    <p>De plus, deux des chambres disposent d'une salle de bains privative et il y a deux toilettes séparées.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_bathroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}