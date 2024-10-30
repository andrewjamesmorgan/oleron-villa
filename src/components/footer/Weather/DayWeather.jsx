import WeatherIcon from './WeatherIcon';
import Temp from './Temp';
export default function DayWeather({dayWeather}) {
  return (
    <span className="day-weather">
      <WeatherIcon 
        icon={dayWeather.weather[0].icon}
        description={dayWeather.weather[0].description}
        size="small"
      />
      <Temp 
        temp={dayWeather.temp.min}
        size="small"
      /> - <Temp 
      temp={dayWeather.temp.max}
      size="small"
    />
    </span>
  );
}