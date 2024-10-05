export default function Week({ week, onSelect }) {

  return (
    <div>
      <div>
        <p>{new Date(week.start).getDate()} - {new Date(week.end).getDate()}</p>
      </div>
    </div>
  ); 
}