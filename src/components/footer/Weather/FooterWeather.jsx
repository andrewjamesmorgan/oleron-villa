import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../App';
import { config } from '../../../config';
import Error from '../../Error';
import CurrentWeather from './CurrentWeather';

export default function FooterWeather() {
  const { language } = useContext(UserContext);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${config.lat}&lon=${config.lon}&lang={language}&units=metric&appid=${config.openWeatherKey}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
            console.error(err.message || 'An unexpected error occurred.');
        }
    };
    fetchWeatherData();
}, [language]);

  return (
    <div className="footer-column">
      <h5>{language === "fr" ? "Météo" : "Weather"}</h5>
        {weatherData && <CurrentWeather currentWeather={weatherData.current}/>}
        {error && <Error errorMessage={error}/>}
    </div>
  );
}