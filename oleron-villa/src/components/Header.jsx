import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { UserContext } from '../App';
import '../css/topnav.css';
import LanguageButton from "./buttons/LanguageButton";

function selectMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default function Header() {
  const { language } = useContext(UserContext);
  const pathName = useLocation().pathname;

  return (
    <div className="topnav" id="myTopnav">
      {language === "en" && <nav>
          <Link to="/" 
            className={pathName === "/home" || pathName === "/" ? "active" : "not-active"}>Home</Link>
          <Link to="/inside_house" 
            className={pathName === "/inside_house" ? "active" : "not-active"}>House</Link>
          <Link to="/booking"
            className={pathName === "/booking" ? "active" : "not-active"}>Bookings</Link>
          <LanguageButton buttonLanguage={"fr"}/>
          {/* eslint-disable-next-line */}
          <a href="#" className="icon" onClick={selectMenu}>
            <i className="fa fa-bars"></i>
          </a>
      </nav>}
      {language === "fr" && <nav>
          <Link to="/fr" 
            className={pathName === "/fr" || pathName === "/" ? "active" : "not-active"}>Accueil</Link>
          <Link to="/inside_house-fr" 
            className={pathName === "/inside_house-fr" ? "active" : "not-active"}>Maison</Link>
          <Link to="/booking-fr"
            className={pathName === "/booking-fr" ? "active" : "not-active"}>Réservations</Link>
          <LanguageButton buttonLanguage={"en"}/>
          {/* eslint-disable-next-line */}
          <a href="#" className="icon" onClick={selectMenu}>
            <i className="fa fa-bars"></i>
          </a>
      </nav>}
    </div>
  );
}