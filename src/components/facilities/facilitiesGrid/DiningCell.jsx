import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function DiningCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Large dining table, with kitchen in the background';
  const english = (<>
    <h3>Dining</h3>
    <p>After adding the extensions (behind the door to the garage) the dining table can comfortably seat twelve people - perfect for big family meals. Of course if the weather is good then you'll want to be eating out on the terrace.</p>
    <p>In the kitchen you'll find all of the crockery, glasses, cutlery and serving dishes that you'd expect – as well as the seaside extras such as crab-claw-crackers.</p>
  </>);
  
  const frenchAlt = "Grande table à manger, avec cuisine en arrière-plan";
  const french = (<>
    <h3>Repas</h3>
    <p>En ajoutant les allonges (vous les trouverez dans le garage), la table de salle à manger permet à une douzaine de personnes de manger sans se serrer. Bien sûr, quand le temps le permet, vous mangerez sur la terrasse.</p>
    <p>Dans la cuisine, vous trouverez un service de table complet, ansi que les ustensiles nécessaires en bord de mer – couteaux à huitre, fourchettes à fruits de mer, etc.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron_kitchen_dining_1600.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}