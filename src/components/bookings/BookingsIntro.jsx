import { useContext } from 'react';
import { UserContext } from '../../App';

export default function BookingsIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='bookings-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "Réservation de la maison" : "Booking the house"}</h1>
        <img
          src="../../images/outside/Oleron_Outside_House_1442.jpg"
          alt={language === "en" ? "Outdoor view of the house - with white walls and blue shutters. Also show path leading into the woods"
                                : "Vue extérieure de la maison - avec murs blancs et volets bleus. Afficher également le chemin menant aux bois"}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>Check availability, select which weeks you're interested in booking, add your details, and then submit the form. We'll get in touch with you as soon as possible to answer any questions and confirm the booking.</h2> }
        { language === "fr" && <h2>Vérifiez la disponibilité, sélectionnez les semaines qui vous intéressent, ajoutez vos coordonnées, puis soumettez le formulaire. Nous vous contacterons dans les plus brefs délais pour répondre à vos questions et confirmer la réservation.</h2> }
      </div>
    </>
  );
}