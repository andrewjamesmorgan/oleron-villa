import { useContext } from 'react';
import { UserContext } from '../../App';
// import ReactWeather, { useVisualCrossing } from 'react-open-weather';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { config } from '../../config';

export default function FooterWeather() {
  const { language } = useContext(UserContext);
  // const { data, isLoading, errorMessage } = useVisualCrossing({
  //   key: config.weatherKey,
  //   lat: config.lat,
  //   lon: config.lon,
  //   lang: language,
  //   unit: 'metric', // values are (metric,us,uk)
  // });

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: config.weatherKey,
    lat: config.lat,
    lon: config.lon,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };

  return (
    <div className="footer-colum">
      <h5>{language === "fr" ? "Météo" : "Weather"}</h5>
      {/* <ReactWeather
			  theme={customStyles}
        data={data}
        isLoading={isLoading}
        locationLabel={config.location}
        showForecast="true"
      /> */}
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={config.location}
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}