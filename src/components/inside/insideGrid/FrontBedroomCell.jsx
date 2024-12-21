
import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function FrontBedroomCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Bedroom with light blue walls. 2 single beds, one of which can be extended to a double. View of trees through the window.';
  const english = (<>
    <h3>Front bedroom (Ch1)</h3>
    <p>This bedroom has a single bed that extends into a double as well as another single bed.</p>
    <p>The room looks out in three directions including to the West where you can view the famous bridge that links the island to the mainland.</p>
  </>);
  
  const frenchAlt = "Chambre aux murs bleu clair. 2 lits simples dont un extensible en lit double. Vue des arbres par la fenêtre.";
  const french = (<>
    <h3>Chambre d'enfants (Ch1)</h3>
    <p>Un 3e lit est caché dans le tiroir d'un des autres lits, si vous avez besoin d'un 3e couchage.</p>
    <p>Avec ses 3 fenêtres, cette pièce vous réserve une surprise... Regardez bien vers l'est et vous verrez le viaduc!</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/oleron_front_bedroom.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}