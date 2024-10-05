import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { bookingData } from '../../temp/bookingData';

export default function Year({ year, onSelect }) {
  const { language } = useContext(UserContext);
  const [weeks, setWeeks] = useState([]);
  const [weeksByMonth, setWeeksByMonth] = useState([]);

  // Filter bookings to get only those in the specified year (year is a string)
  useEffect(() => {
    const filteredWeeks = bookingData.filter(booking => booking.start.getFullYear() === parseInt(year));
    setWeeks(filteredWeeks);
  }, [year]);

  // Group weeks by month
  useEffect(() => {
    const groupedByMonth = weeks.reduce((acc, week) => {
      const month = week.start.getMonth(); // Get the month (0-based index)
      
      if (!acc[month]) {
        acc[month] = {
          month: month,
          weeks: []
        };
      }

      acc[month].weeks.push(week);
      return acc;
    }, {});

    // Convert the grouped object into an array of objects for each month
    const weeksByMonthArray = Object.keys(groupedByMonth).map(month => ({
      month: parseInt(month), // convert back to integer
      weeks: groupedByMonth[month].weeks
    }));

    setWeeksByMonth(weeksByMonthArray);
  }, [weeks]);

  return (
    <div>
      <h3>{year}</h3>
      <div>
        {weeksByMonth.map(({ month, weeks }) => (
          <div key={month}>
            <h4>{new Date(parseInt(year), month).toLocaleString(language, { month: 'long' })}</h4>
            <ul>
              {weeks.map((week, index) => (
                <li key={index}>
                  {week.property} - {week.start.toDateString()} to {week.end.toDateString()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}