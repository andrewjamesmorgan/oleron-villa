import WeatherIcon from './WeatherIcon';
import Temp from './Temp';
export default function CurrentWeather({currentWeather}) {
  return (
    <div className="current-weather">
      <WeatherIcon 
        icon={currentWeather.weather[0].icon}
        description={currentWeather.weather[0].description}
      />
      <Temp temp={currentWeather.temp}/>
    </div>

  );
}