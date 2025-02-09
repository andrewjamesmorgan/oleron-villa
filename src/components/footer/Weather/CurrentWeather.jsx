import WeatherIcon from './WeatherIcon';
import Temp from './Temp';
import WindIndicator from './WindIndicator';

export default function CurrentWeather({currentWeather, dailyWeather}) {
  function timeStampToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0'); 
    return `${hours}:${minutes}`;
  }

  return (
    <div className="current-weather" id="footer-current-weather">
      <div>
        <WeatherIcon 
          className="current-weather-icon"
          icon={currentWeather.weather[0].icon}
          description={currentWeather.weather[0].description}
        />
        <span id="current-temp" >
          <Temp temp={currentWeather.temp} suffix="true"/>
        </span>
      </div>
      <div id="weather-current-summary-container">
        <div id="weather-current-summary">
          <Temp 
            temp={dailyWeather.temp.min}/>-<Temp 
            temp={dailyWeather.temp.max} suffix="true"/>
          <WindIndicator 
            speed={currentWeather.wind_speed}
            degrees={currentWeather.wind_deg}
          />
          <div>
            <i className="fa fa-sun-o"></i> <i className="fa fa-arrow-up"></i>{` ${timeStampToTime(dailyWeather.sunrise)}`}
          </div>
          <div>
            <i className="fa fa-sun-o"></i> <i className="fa fa-arrow-down"></i>{` ${timeStampToTime(dailyWeather.sunset)}`}
          </div>
        </div>
      </div>
    </div>
  );
}