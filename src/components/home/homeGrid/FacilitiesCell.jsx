import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function FacilitiesCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Large TV, speakers, and other AV equipment';
  const english = `
    <h3>Facilities</h3>
    <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wired and wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and even bikes that you can borrow.</p>
  `;
  
  const frenchAlt = "Grand téléviseur, haut-parleurs et autres équipements audiovisuels";
  const french = `
    <h3>Equipements</h3>
    <p>Vous devriez trouver tout ce dont vous avez besoin pour un séjour confortable et agréable. La cuisine est bien équipée avec lave-vaisselle, micro-ondes, four, vaisselle, etc. Dans le salon il y a une télévision haute définition avec des programmes en anglais et en français - ainsi qu'un excellent système audio. Le haut débit filaire et sans fil est disponible dans toute la maison. A l'extérieur vous trouverez du salon de jardin, un barbecue et même des vélos que vous pourrez emprunter.</p>
    <p>Pour l'extérieur, en plus de 2 salons de jardin et d'un barbecue, des bains de soleil vous permettront de vous relaxer au soleil… attention à bien vous protéger!/p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron_tv_1900.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        route={language === "fr" ? "/facilities-fr" : "/facilities"}
        body={language === "fr" ? french : english}
    />
  );
}