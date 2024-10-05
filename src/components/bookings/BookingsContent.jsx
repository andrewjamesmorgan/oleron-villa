// import { useContext, useState } from 'react';
import { useState } from 'react';

// import { UserContext } from '../../App';
import BookingsIntro from "./BookingsIntro";
import Year from "./Year";

export default function BookingsContent() {
  // const { language } = useContext(UserContext);
  const [weeksToBook, setWeeksToBook] = useState([]);

  function includeInList(week, include) {
    if (include) {
      // Add the week to the array if it's not already there
      if (!weeksToBook.includes(week)) {
        setWeeksToBook(prevWeeks => [...prevWeeks, week]);
      }
    } else {
      // Remove the week from the array if it's present
      setWeeksToBook(prevWeeks => prevWeeks.filter(w => w !== week));
    }
  }

  return (
    <div className='space-above'>
      <BookingsIntro />
      <Year year="2024" onSelect={includeInList}/>
    </div>
  );
}

