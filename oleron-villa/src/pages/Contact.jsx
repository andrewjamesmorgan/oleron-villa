import { useContext } from 'react';
import { UserContext } from '../App';

export default function Contact() {
  const { language } = useContext(UserContext);

  return (
    <h1>{language === "fr" ? "Contactez" : "Contact"}</h1>
  );
}