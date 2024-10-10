import { useContext } from 'react';
import { UserContext } from '../../App';
import AwesomeButton from '../buttons/AwesomeButton';

export default function FooterContact() {
  const { language } = useContext(UserContext);

  return (
    <div className="footer-colum">
      <h5>{language === "fr" ? "Contactez-nous" : "Contact us"}</h5>
      <div className="stacked-buttons">
        <AwesomeButton 
          label="email" 
          icon="fa fa-envelope" 
          url="mailto:andrewjamesmorgan@gmail.com"/>
        <AwesomeButton 
          label="email" 
          icon="fa-envelope" 
          url="mailto:andrewjamesmorgan@gmail.com"/>
        </div>
    </div>
  );
}