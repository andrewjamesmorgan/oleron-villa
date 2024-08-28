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
  const { language, setLanguage } = useContext(UserContext);
  const pathName = useLocation().pathname;

  return (
    <div className="topnav" id="myTopnav">
      <nav>
          <Link to="/" 
            className={pathName === "/home" || pathName === "/" ? "active" : "not-active"}>Home</Link>
          <Link to="/inside_house" 
            className={pathName === "/inside_house" ? "active" : "not-active"}>House</Link>
          <Link to="/booking"
            className={pathName === "/booking" ? "active" : "not-active"}>Bookings</Link>
          <LanguageButton buttonLanguage={language === "fr" ? "en" : "fr"}/>
          <a href="#" className="icon" onClick={selectMenu}>
            <i className="fa fa-bars"></i>
          </a>
      </nav>
    </div>
  );
}