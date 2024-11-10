import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function OutsideHouseCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'View of a house with white walls and blue shutters. Fence has pink hollyhock flowers. Sandy path leads into the woods.';
  const english = `
    <h3>Outside the house</h3>
    <p>The house backs onto the woods and it's a short walk or cycle through those woods to get to a great beach.</p>
    <p>There is plenty of space to play in the garden and there is a large terrace for dining as well as a first floor solarium off the master bedroom.</p>
  `;
  
  const frenchAlt = "Vue d'une maison aux murs blancs et volets bleus. La clôture a des fleurs de rose trémière roses. Un chemin de sable mène dans les bois.";
  const french = `
    <h3>A l'extérieur de la maison</h3>
    <p>La maison est adossée à la forêt, qui donne un accès direct à la plage, soit par des sentiers piétonniers, soit par la piste cyclable qui passe devant la maison avant de s'enfoncer dans les bois vers la mer.</p>
    <p>La propriété a une grande terrasse suivie d'un espace permettant aux enfants de jouer en toute sécurité. En prime, un solarium exposé sud-ouest donne un espace supplémentaire ou profiter du soleil.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/outside/Oleron_Outside_House_1442.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        route={language === "fr" ? "/outside_house-fr" : "/outside_house"}
        body={language === "fr" ? french : english}
    />
  );
}