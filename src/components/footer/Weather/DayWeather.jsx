import WeatherIcon from './WeatherIcon';
import Temp from './Temp';
import DayOfWeek from './DayOfWeek';

export default function DayWeather({dayWeather}) {
  return (
    <span className="day-weather">
      <DayOfWeek timestamp={dayWeather.dt}/>
      <WeatherIcon 
        icon={dayWeather.weather[0].icon}
        description={dayWeather.weather[0].description}
        size="small"
      />
      <Temp 
        temp={dayWeather.temp.min}
        size="small"
      />-<Temp 
      temp={dayWeather.temp.max}
      size="small"
      suffix="true"
    />
    </span>
  );
}