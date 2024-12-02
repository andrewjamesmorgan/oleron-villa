import React, { useState } from 'react';

export default function Week({ week, onSelect }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    onSelect(`${week.start} - ${week.end}`, !checked);
  };

  return (
    <div>
      <div className={week.booked ? "week-column-booked" : "week-column-available"}>
        <b>{new Date(week.start).getDate()}-{new Date(week.end).getDate()}</b>
        {!week.booked && <div>
          <p>€{week.price}</p>
          <input 
            type="checkbox" 
            className="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </div>}
      </div>
    </div>
  ); 
}