import { useContext } from 'react';
import { UserContext } from '../App';

export default function InsideHouse() {
  const { language } = useContext(UserContext);
  
  return (
    <h1>{language === "fr" ? "Dans la maison" : "Inside House"}</h1>
  );
}