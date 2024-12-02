import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function BookingCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Cartoon family wearing beach clothes smiling while looking at a calendar';
  const english = `
    <h3>Availability & bookings</h3>
    <p>See the current availability and prices - if you find what you need then use the on-line form to submit a booking request.</p>
  `;
  
  const frenchAlt = "Famille de dessins animés portant des vêtements de plage souriant tout en regardant un calendrier";
  const french = `
    <h3>Disponibilités et réservations</h3>
    <p>Trouvez ici les disponibilités et tarifs. Pour réserver, vous pouvez envoyer votre demande en ligne.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/booking/oleron-calendarbooking.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        route={language === "fr" ? "/bookings-fr" : "/bookings"}
        body={language === "fr" ? french : english}
    />
  );
}