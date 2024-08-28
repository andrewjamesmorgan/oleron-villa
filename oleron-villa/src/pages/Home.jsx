import { useContext } from 'react';
import { UserContext } from '../App';

export default function Home() {
  const { language } = useContext(UserContext);
   
  return (
    <h1>{language === "fr" ? "Maison" : "Home"}</h1>
  );
}