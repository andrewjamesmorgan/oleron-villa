import { useContext } from 'react';
import { UserContext } from '../../App';

export default function StayIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='stay-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "Votre séjour chez nous" : "Your stay with us"}</h1>
        <img
          src="../../images/stay/tenant-information-wide.jpg"
          alt={language === "fr" 
            ? "Rien de trop utile. Mélange de TV, WiFi, parking, cuisine, nettoyage, etc." 
            : "Nothing too useful. Mix of TV, WiFi, parking, cooking, cleaning, etc."}
          className='full-width-image'
        />  
      </div>
      <div className='responsive-text'>
        <h2>{language === "fr" ? "Informations utiles pendant votre séjour" : "Useful information during your stay"}</h2>
        <p>
          {language === "fr" 
            ? "Le but de cette page est de vous fournir des informations sur l'appartement et la région qui pourraient être utiles pendant votre séjour dans l'appartement." 
            : "The purpose of this page is to provide you with information about the apartment and area that could be useful while you're staying in the apartment."}
        </p>
        <p>
          {language === "fr" 
            ? "Si vous ne trouvez pas ce dont vous avez besoin, veuillez nous le faire savoir et nous ferons tout notre possible pour vous aider." 
            : "If you don't find what you need then please let us know, and we'll do whatever we can to help."}
        </p>
      </div>
    </>
  );
}