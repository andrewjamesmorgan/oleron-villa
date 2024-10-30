import {icons} from './weatherSVGs';

export default function WeatherIcon({icon, description, size}) {
  return (
    <div className="current-weather-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="10 10 76 76"
        className={size === 'small' ? "weather-icon-small" : "weather-icon"}
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