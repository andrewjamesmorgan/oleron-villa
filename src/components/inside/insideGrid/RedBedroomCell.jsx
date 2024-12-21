
import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function RedBedroomCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Bedroom with a double bed, and 2 red lamps.';
  const english = (<>
    <h3>Red bedroom (Ch2)</h3>
    <p>A very pretty double bedroom with loads of storage in the built-in wardrobe.</p>
    <p>Views towards the south of the island.</p>
  </>);
  
  const frenchAlt = "Chambre avec un lit double et 2 lampes rouges.";
  const french = (<>
    <h3>Chambre rouge (Ch2)</h3>
    <p>Un dernier lit double, et beaucoup de placards que les photos ne montrent pas.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_red_bedroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}