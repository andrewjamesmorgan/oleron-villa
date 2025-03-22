import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function CleaningCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A cartoon character happily mopping the floor.';
  const english = (<>
    <h3>Cleaning, sheets & towels</h3>
    <p>To ensure that the house is clean for our next tenants, we commission a cleaning service after each stay. We add 150€ to the cost of each booking to cover part of this cost – you'll see this in the estimated price when requesting a booking.</p>
    <p>Sheets and towels can be rented through our concierge. You can <a href="https://www.louerlinge.com/?lang=en_US" target="_blank" rel="noopener noreferrer">check prices here</a> and then book through our concierge.</p>
  </>);
  
  const frenchAlt = "Un personnage de dessin animé qui nettoie joyeusement le sol.";
  const french = (<>
    <h3>Nettoyage, draps et serviettes</h3>
    <p>Afin de garantir la propreté de la maison pour nos prochains locataires, nous commandons un service de ménage après chaque séjour. Nous ajoutons 150 € au coût de chaque réservation pour couvrir une partie de ce coût – vous le verrez dans le prix estimé lors de la demande de réservation.</p>
    <p>Les draps et les serviettes peuvent être loués via notre service de conciergerie. Vous pouvez <a href="https://www.louerlinge.com/?lang=fr_FR" target="_blank" rel="noopener noreferrer">consulter les tarifs ici</a>, puis réserver auprès de notre conciergerie.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron-cleaning.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}