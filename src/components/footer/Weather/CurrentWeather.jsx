import {icons} from './weatherSVGs';

export default function CurrentWeather(currentWeather) {
  return (
    <div className="current-weather">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        className="weather-icon"
        aria-label={`Weather icon for ${currentWeather.currentWeather.weather[0].description}`}
      >
        <title>{currentWeather.currentWeather.weather[0].description}</title>
        <path
          d={icons[`ow${currentWeather.currentWeather.weather[0].icon}`]}
          fill="currentColor"
        />
      </svg>
    </div>
  );
}