import { useContext } from 'react';
import { UserContext } from '../App';

export default function Footer() {
  const { language } = useContext(UserContext);
  
  return (
    <h1>{language === "fr" ? "Pied" : "Footer"}</h1>
  );
}