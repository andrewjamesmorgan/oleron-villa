import DayWeather from "./DayWeather";

export default function WeekWeather({ dailyWeather }) {
  return (
    <div className="week-weather">
      {dailyWeather.map((day, index) => (
        <DayWeather key={index} dayWeather={day} />
      ))}
    </div>
  );
}