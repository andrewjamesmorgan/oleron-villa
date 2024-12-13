import { useState } from 'react';
import {groupedBookingData} from '../../data/groupedBookingData';
import Year from "./Year";
import BookingsIntro from "./BookingsIntro";
import BookingsForm from "./BookingsForm";

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
      {groupedBookingData.map((year) => (
        <Year
          key={`year-${year.year}`} 
          year={year} 
          onSelect={includeInList} 
        />
      ))}
      <div className="container">
        <BookingsForm weeks={weeksToBook}/>
      </div>
    </div>
  );
}