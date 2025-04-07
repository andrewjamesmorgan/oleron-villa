import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function ContactCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = '';
  const english = (<>
    <h3>Contact us</h3>
    <p>Use the on-line form to submit a question (or get in touch using any of the methods you see at the bottom of this page.</p>
  </>);
  
  const frenchAlt = "Nous contacter";
  const french = (<>
    <h3>Disponibilités et réservations</h3>
    <p>Utiliser le formulaire en ligne ci-dessous – ou les autres moyens mis à votre disposition en bas de la page.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/contact/oleron-contact.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        route={language === "fr" ? "/contact-fr" : "/contact"}
        body={language === "fr" ? french : english}
        centerX={58}
        centerY={50}
    /> 
  );
}