import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import en_flag from './icons/flag_en.gif';
import fr_flag from './icons/flag_fr.gif';
import '../../css/button.css';

export default function LanguageButton({buttonLanguage}) {
  const { setLanguage } = useContext(UserContext);
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  function handleClick() {
    setLanguage(buttonLanguage);
    let newPathName = pathName;

    if (buttonLanguage === "fr") {
      switch(pathName) {
        case "/":
          newPathName = "/fr";
          break;
        case "/booking":
          newPathName = "/booking-fr";
          break;
        case "/inside_house":
          newPathName = "/inside_house-fr";
          break;
        default:
          console.warn(`Missing route option for ${buttonLanguage} version of route ${pathName}.`);
      }
    } else {
      switch(pathName) {
        case "/fr":
          newPathName = "/";
          break;
        case "/booking-fr":
          newPathName = "/booking";
          break;
        case "/inside_house-fr":
          newPathName = "/inside_house";
          break;
        default:
          console.warn(`Missing route option for ${buttonLanguage} version of route ${pathName}.`);
      }
    }

    navigate(newPathName);
  }

  return (
    <button className="combo-button" onClick={handleClick}>
      <span>
        <img 
          className="flagimage"
          alt={buttonLanguage}
          src={buttonLanguage === "fr" ? fr_flag : en_flag}
        />
        {` ${buttonLanguage.toUpperCase()}`}
      </span>
    </button>
  );
}