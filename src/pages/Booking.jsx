import { useContext } from 'react';
import { UserContext } from '../App';

export default function Booking() {
  const { language } = useContext(UserContext);

  return (
    <h1>{language === "fr" ? "Livre" : "Booking"}</h1>
  );
}