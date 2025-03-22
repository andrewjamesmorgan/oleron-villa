import { useState, useEffect } from 'react';
import { config } from '../../config';
import Year from "./Year";
import BookingsIntro from "./BookingsIntro";
import BookingsForm from "./BookingsForm";
import AdminBookingsForm from './admin/AdminBookingsForm';

export default function BookingsContent() {
  const [weeksToBook, setWeeksToBook] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const isAdmin = localStorage.getItem("ol-username") && 
    localStorage.getItem("ol-password");

  async function fetchWeeks() {
    try {
      console.log(`Fetching weeks from ${config.getWeeksURL}`);
      const response = await fetch(config.getWeeksURL);
      const data = await response.json();
      if (response.status === 200) {
        console.log("Fetched weeks:", data);
        if (data.weeks) {
          setCalendarData(data.weeks);
        }
      } else {
        console.error(`Failed to fetch weeks: ${data.message}`);
      }
    } catch (error) {
      console.error(`Failed to fetch weeks: ${error.message}`);
    }
  }

  function includeInList(week, include) {
    if (include) {
      if (!weeksToBook.includes(week)) {
        setWeeksToBook(prevWeeks => [...prevWeeks, week]);
      }
    } else {
      setWeeksToBook(prevWeeks => prevWeeks.filter(w => w !== week));
    }
  }

  useEffect(() => {
    fetchWeeks();
  }, []);

  return (
    <div className='space-above'>
      <BookingsIntro />
      {calendarData.map((year) => (
        <Year
          key={`year-${year.year}`} 
          year={year} 
          onSelect={includeInList} 
        />
      ))}
      <div>
        {!isAdmin && <BookingsForm weeks={weeksToBook}/> }
        {isAdmin && <AdminBookingsForm refresh={fetchWeeks} />}
      </div>
    </div>
  );
}