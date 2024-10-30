import { useContext } from 'react';
import { UserContext } from '../../../App';

export default function DayOfWeek({timestamp}) {
  const { language } = useContext(UserContext);

  function getDayOfWeek(timestamp) {
    const date = new Date(timestamp * 1000);
    const daysOfWeek = {
      en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    };
    
    const dayIndex = date.getUTCDay(); // Get day index (0-6, where 0 is Sunday)
    return daysOfWeek[language === "fr" ? "fr" : "en"][dayIndex];
  }
  
  return (
    <h5>{getDayOfWeek(timestamp)}</h5>
  );
}