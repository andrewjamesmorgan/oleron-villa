import Month from './Month';

export default function Year({ year, onSelect }) {
  return (
    <div>
      <h3 className="year">{year.year}</h3>
      <div className='calendar-grid'>
        {year.months.map((monthData, index) => (
          <div className="calendar-month">
            <Month 
              key={index} 
              month={monthData} 
              onSelect={onSelect} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}