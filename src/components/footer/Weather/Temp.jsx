export default function Temp({ temp, size }) {
  return (
    <span className={size === 'small' ? "temp-small" : "temp"}>
      {Math.round(temp)}°C
    </span>
  );
}