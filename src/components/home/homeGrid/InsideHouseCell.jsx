import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function InsideHouseCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A lounge with sofas, a TV, and a long dining table. View of a sunny terrace through the window';
  const english = `
    <h3>Inside the house</h3>
    <p>The house is laid out over two floors. There are four bedrooms (can sleep up to 13 people) - two of which have en-suite bathrooms. The ground floor is dominated by the large open plan kitchen, dining area and lounge.</p>
    <p>The decoration and furnishings are comfortable and modern.</p>
  `;
  
  const frenchAlt = "Un salon avec des canapés, une télévision et une longue table à manger. Vue d'une terrasse ensoleillée par la fenêtre";
  const french = `
    <h3>A l'intérieur</h3>
    <p>Maison à étage, 4 chambres (dont 2 avec leurs propres salles d'eau) offrent des couchages pour 9 personnes, le canapé convertible du salon ajoutant un couchage pour 2 personnes supplémentaires.</p>
    <p>Au rez-de-chaussée, un grand salon-salle à manger de 56 m2 vous permettra des moments conviviaux dans un espace moderne et confortable.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/inside/Oleron_Lounge_1900.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        route={language === "fr" ? "/inside_house-fr" : "/inside_house"}
        body={language === "fr" ? french : english}
    />
  );
}