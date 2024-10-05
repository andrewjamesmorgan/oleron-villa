import { useContext } from 'react';
import { UserContext } from '../../App';
import Week from './Week';

export default function Month({ month, onSelect }) {
  const { language } = useContext(UserContext);

  return (
    <div>
      <h4>{language === 'fr'? month.monthFR : month.month}</h4>
      <div>
        {month.bookings.map((week, index) => (
          <p key={index}>
            <Week week={week} onSelect={onSelect}/>
          </p>
        ))}
      </div>
    </div>
  ); 
}