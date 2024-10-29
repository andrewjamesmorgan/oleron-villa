import {icons} from './weatherSVGs';

export default function WeatherIcon({icon, description}) {
  return (
    <div className="current-weather">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        className="weather-icon"
        aria-label={`Weather icon for ${description}`}
      >
        <title>{description}</title>
        <path
          d={icons[`ow${icon}`]}
          fill="currentColor"
        />
      </svg>
    </div>
  );
}