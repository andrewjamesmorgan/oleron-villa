import { useState } from 'react';
import {groupedBookingData} from '../../temp/groupedBookingData'; // Assuming this is an array of objects with a "year" field
import Year from "./Year";
import BookingsIntro from "./BookingsIntro"; // Assuming this was missing from your example

export default function BookingsContent() {
  const [weeksToBook, setWeeksToBook] = useState([]);

  function includeInList(week, include) {
    if (include) {
      if (!weeksToBook.includes(week)) {
        setWeeksToBook(prevWeeks => [...prevWeeks, week]);
      }
    } else {
      setWeeksToBook(prevWeeks => prevWeeks.filter(w => w !== week));
    }
  }

  return (
    <div className='space-above'>
      <BookingsIntro />

      {groupedBookingData.map((year, index) => (
        <Year
          key={index} 
          year={year} 
          onSelect={includeInList} 
        />
      ))}
    </div>
  );
}