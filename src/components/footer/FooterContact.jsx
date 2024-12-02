// import { useContext } from 'react';
// import { UserContext } from '../../App';
import AwesomeButton from '../buttons/AwesomeButton';

export default function FooterContact() {
  // const { language } = useContext(UserContext);

  return (
    <div className="footer-column" id="footer-contact">
      {/* <h5>{language === "fr" ? "Contactez-nous" : "Contact us"}</h5> */}
      <div className="stacked-buttons">
        <AwesomeButton 
          label="email" 
          icon="fa fa-envelope" 
          url="mailto:andrewjamesmorgan@gmail.com"/>
        <AwesomeButton 
          label="WhatsApp" 
          icon="fa fa-whatsapp" 
          url="https://wa.me/447899984259"/>
        <AwesomeButton 
          label="+44-7899984259" 
          icon="fa-phone" 
          url="tel:+447899984259"/>
      </div>
    </div>
  );
}