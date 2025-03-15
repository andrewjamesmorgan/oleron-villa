export default function WeekInfo({ week }) {
  function formatDate(dateString) {
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  }
  
  function bookingStatus() {
    if (new Date(week.end) < new Date()) {
      return 'past';
    }
    if (week.booked) {
      return 'booked';
    } else {
      return 'available';
    }
  }

  return (
    <>
      <div id='booking-info' className={`week-info ${bookingStatus()}`}>
        <p><b>{formatDate(week.start)} → {formatDate(week.end)}</b></p>
        <p>
          {week.name && <span>{week.name}</span>}
          {week.price && <span> €{week.price}</span>}
        </p>
        {week.email && <p> &lt;{week.email}&gt;</p>}
        <p>
          {week.booked ? 'Booked' : 'Available'} 
          {week.source && <span> ({week.source})</span>}
        </p>
        {week.notes && <p><i>— {week.notes} —</i></p>}
      </div>
    </>
  );
}