// import { useContext } from 'react';
// import { UserContext } from '../../App';
import Month from './Month';

export default function Year({ year, onSelect }) {
  // const { language } = useContext(UserContext);

  return (
    <div>
      <h3>{year.year}</h3>
      {year.months.map((monthData, index) => (
        <Month
          key={index} 
          month={monthData} 
          onSelect={onSelect} 
        />
      ))}
    </div>
  );
}