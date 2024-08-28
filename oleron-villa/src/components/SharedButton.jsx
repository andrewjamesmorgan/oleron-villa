export default function SharedButton({ count, onClick }) { 
  return (
    <button onClick={onClick}>
    Pushed {count} times
    </button>
  );
}