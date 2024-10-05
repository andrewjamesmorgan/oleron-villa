import { useContext } from 'react';
import { UserContext } from '../../App';

export default function BookingsIntro() {
  const { language } = useContext(UserContext);

  return (
    <div id='contact-intro' className='intro-section'>
      <h1>{language === "fr" ? "Réservation de la maison" : "Booking the house"}</h1>
    </div>
  );
}