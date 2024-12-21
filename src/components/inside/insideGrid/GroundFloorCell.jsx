
import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function GroundFloorCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A plan of the ground floor. Shows a large open space with the lounge, dining area and kitchen. A large garage. A bedroom (Ch4) with a double bed and en-suite shower room. Seperate toilet. Steps from the outside up to the first floor solarium. Indoor stairs up to the first floor.';
  const english = (<>
    <h3>Ground floor plan</h3>
  </>);
  
  const frenchAlt = "Un plan du rez-de-chaussée. Montre un grand espace ouvert avec le salon, la salle à manger et la cuisine. Un grand garage. Une chambre (Ch4) avec un lit double et salle de douche attenante. WC séparé. Marches de l'extérieur jusqu'au solarium du premier étage. Escalier intérieur jusqu'au premier étage.";
  const french = (<>
    <h3>Plan du rez-de-chaussée</h3>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_ground_floor_plan.png"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}