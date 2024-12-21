
import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function FirstFloorCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A plan of the first floor. Shows 3 bedrooms, one to the east (Ch1), one in the middle (Ch2) facing south and one (Ch3) to the west that has windows in 3 directions - it also has an en-suite shower room and toilet; this bedroom opens onto the terrace. There is also a toilet and a bathroom with shower and baisin. Stairs leading down to the ground floor.';
  const english = (<>
    <h3>First floor plan</h3>
  </>);
  
  const frenchAlt = "Un plan du premier étage. Montre 3 chambres, une à l'est (Ch1), une au milieu (Ch2) orientée sud et une (Ch3) à l'ouest qui a des fenêtres dans 3 directions - elle dispose également d'une salle de douche et de toilettes attenantes ; cette chambre ouvre sur la terrasse. Il y a aussi des toilettes et une salle de bain avec douche et baignoire. Escalier menant au rez-de-chaussée.";
  const french = (<>
    <h3>Plan du premier étage</h3>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_first_floor_plan.png"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}