import { useContext } from 'react';
import { UserContext } from '../../App';

export default function ContactIntro() {
  const { language } = useContext(UserContext);

  return (
    <div id='contact-intro' className='intro-section'>
      <h1>{language === "fr" ? "Nous Contacter" : "Contact Us"}</h1>
    </div>
  );
}