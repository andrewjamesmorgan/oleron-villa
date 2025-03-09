import WeekInfo from './WeekInfo';

export default function ExistingWeeks({ weeks, selectWeek }) { 
  return (
    <>
      <div className='responsive-grid'>
          {weeks.map((week, index) => (
            <div 
              onClick={() => selectWeek(week)}
              key={index}
            >  
              <WeekInfo key={index} week={week} />
            </div>
          ))}
        </div>
    </>
  );
}