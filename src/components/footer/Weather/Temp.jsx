export default function Temp({ temp, size, suffix }) {
  return (
    <span className={size === 'small' ? "temp-small" : "temp"}>
      {Math.round(temp)}{suffix==='true' ? '°C' : ''}
    </span>
  );
}