import { useContext } from 'react';
import { UserContext } from '../../App';
import en_flag from './icons/flag_en.gif';
import fr_flag from './icons/flag_fr.gif';


import '../../css/button.css';

export default function LanguageButton({buttonLanguage}) {
  const { language, setLanguage } = useContext(UserContext);

  function handleClick() {
    setLanguage(buttonLanguage);
  }

  return (
    <button className="combo-button" onClick={handleClick}>
      <span>
        <img 
          className="flagimage"
          alt={buttonLanguage}
          src={buttonLanguage === "fr" ? fr_flag : en_flag}
        />
        {buttonLanguage.toUpperCase()}
      </span>
    </button>
  );
}