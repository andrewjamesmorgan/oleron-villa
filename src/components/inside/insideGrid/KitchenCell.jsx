import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function KitchenCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Kitchen and dining room. Large dining table with chairs. Modern looking kitchen.';
  const english = `
    <h3>Kitchen & dining area</h3>
    <p>The kitchen is clean, modern and well equipped - including induction hob, oven, microwave and dishwasher. Crockery, cutlery, glasses and cooking utensils are all provided.</p>
    <p>The dining table can comfortably sit up to twelve people (using the table extensions and spare chairs that you will find in the garage).</p>
  `;
  
  const frenchAlt = "Cuisine et salle à manger. Grande table à manger avec chaises. Cuisine d'aspect moderne.";
  const french = `
    <h3>Salon</h3>
    <p>La cuisine est équipée de tous les éléments dont vous pourrez avoir besoin dans une maison de cette taille et ce niveau de confort. La table de salle-à-manger est assez grande pour assoir 8 à 10 personnes. Des rallonges sont disponibles dans le garage pour une table encore plus grande!</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_kitchen_dining_1900.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}