import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { config } from '../config';
import Error from './Error';
import CurrentWeather from './footer/Weather/CurrentWeather';
import WeekWeather from './footer/Weather/WeekWeather';
import FooterContact from './footer/FooterContact';
import Tide from './footer/Tide';

export default function Footer() {
  const { language } = useContext(UserContext);
  const [weatherData, setWeatherData] = useState(null);
  const [tideData, setTideData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${config.lat}&lon=${config.lon}&lang={language}&units=metric&appid=${config.openWeatherKey}`
            );
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
            console.error(err.message || 'An unexpected error occurred.');
        }
    };

    const fetchTideData = async () => {
      setError(null);
      try {
          const response = await fetch(config.tideURL);
          if (!response.ok) {
              throw new Error(`Error fetching tide data: ${response.statusText}`);
          }
          const data = await response.json();
          if (!data.tides) {
              throw new Error('Error fetching tide data: invalid response (no tides element).');
          }
          setTideData(data.tides);
      } catch (err) {
          setError(err.message || 'An unexpected error occurred.');
          console.error(err.message || 'An unexpected error occurred.');
      }
  };

    fetchWeatherData();
    fetchTideData();
}, [language]);

  return (
    <div className='responsive-grid footer-grid small-space-above' id="footer">
        <FooterContact/>
        {tideData && tideData.allTides && <Tide 
          tideData={tideData.allTides}
        />}
        {weatherData && <>
          <CurrentWeather 
            currentWeather={weatherData.current}
            dailyWeather={weatherData.daily[0]}
          />
          <WeekWeather dailyWeather={weatherData.daily}/>
        </>}
      {error && <Error errorMessage={error}/>}
    </div>
  );
}