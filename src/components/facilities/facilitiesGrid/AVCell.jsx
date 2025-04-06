import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function AVCell({ action }) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Large TV screen with speakers and AV components. Two sofas and two armchairs.';
  const english = (
    <>
      <h3>Lounge & entertainment system</h3>
      <p>While you don't want to be spending your time inside, there are times (late in the evening or if the weather's bad) when you have to retire to the lounge.</p>
      <p>The good news is that there are two comfy sofas as well as two armchairs (and lots of other chairs to use if you're a big group) as well as a great entertainment system.</p>
      <p>Everyone gets to enjoy the HD TV, surround-sound audio-system, DVD player and Bluetooth audio. For the English speakers you have dozens of channels via UK Freesat (with built in DVR) and for the French, your channels are delivered to the TV via the broadband internet connection.</p>
    </>
  );

  const frenchAlt = "Grand écran de télévision avec haut-parleurs et composants AV. Deux canapés et deux fauteuils.";
  const french = (
    <>
      <h3>Salon & système de divertissement</h3>
      <p>Bien que vous ne souhaitiez probablement pas passer trop de temps à l'intérieur, il y a des moments (tard le soir ou en cas de mauvais temps) où il faut bien se retirer au salon.</p>
      <p>La bonne nouvelle, c'est qu'il y a deux canapés confortables ainsi que deux fauteuils (et plein d'autres chaises disponibles si vous êtes en grand groupe), sans oublier un excellent système de divertissement.</p>
      <p>Tout le monde peut profiter de la TV HD, du système audio surround, du lecteur DVD et de l'audio Bluetooth. Pour les anglophones, des dizaines de chaînes sont accessibles via UK Freesat (avec enregistreur intégré), et pour les francophones, vos chaînes sont diffusées sur la TV grâce à la connexion internet haut débit.</p>
    </>
  );

  return (
    <InfoBox 
      imageSrc="../../images/facilities/oleron_tv_1900.jpg"
      alt={language === "fr" ? frenchAlt : englishAlt}
      action={action}
      body={language === "fr" ? french : english}
    />
  );
}