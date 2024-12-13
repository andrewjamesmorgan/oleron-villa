import { useContext } from 'react';
import { UserContext } from '../../App';
import Week from './Week';

export default function Month({ month, year, onSelect }) {
  const { language } = useContext(UserContext);

  return (
    <div className="month-container">
      <h4>{language === 'fr'? month.monthFR : month.month}</h4>
      <div className="month-box">
        {month.bookings.map((week, index) => (
            <Week key={`${year}-${month.month}-${index}`} week={week} onSelect={onSelect}/>
        ))}
      </div>
    </div>
  ); 
}