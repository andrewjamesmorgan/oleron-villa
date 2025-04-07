import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function LoungeCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A lounge with sofas, a TV, and a long dining table. View of a sunny terrace through the window';
  const english = (<>
    <h3>Lounge</h3>
    <p>The lounge area has plenty of space to sit everyone comfortably while still leaving space for the kids to play.</p>
    <p>There is a large HD TV with both British and French channels as well as a DVD player. As a bonus there's a great surround-sound audio setup that will even connect to your phone.</p>
    <p>There are two large sofas (one of which converts into a bed) as well as two comfortable arm chairs.</p>
  </>);
  
  const frenchAlt = "Un salon avec des canapés, une télévision et une longue table à manger. Vue d'une terrasse ensoleillée par la fenêtre";
  const french = (<>
    <h3>Salon</h3>
    <p>Un grand salon ouvert avec home cinéma offrant les chaînes françaises et britanniques.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/Oleron_Lounge_1900.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={70}
        centerY={70}
    />
  );
}