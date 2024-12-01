import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function KitchenCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Large dining table, with kitchen in the background';
  const english = `
    <h3>Cooking</h3>
    <p>Inside the kitchen you have everything that you'd look for – induction hob, oven, fridge-freezer, microwave, pots and pans, toaster, kettle, .... If you find anything missing then just let us know and we'll try to provide it.</p>
    <p>Of course if the weather's good (which it normally is!) then you'll want to spend as much time as possible outside and so a charcoal barbecue is provided.</p>
  `;
  
  const frenchAlt = "Grande table à manger, avec cuisine en arrière-plan";
  const french = `
    <h3>Cuisine</h3>
    <p>La cuisine moderne est équipée de tout le matériel dont vous pouvez avoir besoin – table de cuisson à induction, four traditionel, micro-onde, casseroles et poêles, frigidaire-congélateur, grille-pain, bouilloire, cafetière, etc.</p>
    <p>S'il manque quelque chose, dites-le nous et nous ferons de notre mieux pour y remédier. Bien sûr, s'il faut beau (ce qui est presque tout le temps le cas), vous pourrez utiliser le barbecue à charbon de bois.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron-kitchen.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}