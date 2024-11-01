import WeatherIcon from './WeatherIcon';
import Temp from './Temp';
import WindIndicator from './WindIndicator';

export default function CurrentWeather({currentWeather, dailyWeather}) {
  return (
    <div className="current-weather" id="footer-current-weather">
      <div>
        <WeatherIcon 
          icon={currentWeather.weather[0].icon}
          description={currentWeather.weather[0].description}
        />
        <Temp temp={currentWeather.temp} suffix="true"/>
      </div>
      <div>
        <div id="weather-current-summary">
          <Temp 
            temp={dailyWeather.temp.min}/>-<Temp 
            temp={dailyWeather.temp.max} suffix="true"/>
          <WindIndicator 
            speed={currentWeather.wind_speed}
            degrees={currentWeather.wind_deg}
          />
        </div>
      </div>
    </div>
  );
}