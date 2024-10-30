import DayWeather from "./DayWeather";

export default function WeekWeather({ dailyWeather }) {
  return (
    <div className="week-weather">
      {dailyWeather.slice(1).map((day, index) => (
        <DayWeather key={index + 1} dayWeather={day} />
      ))}
    </div>
  );
}