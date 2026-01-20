import { WeatherData } from "../types";

export default function WeatherCard({ data }: { data: WeatherData }) {
  return (
    <div className="bg-glass backdrop-blur rounded-3xl p-8 w-80">
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-6xl mt-4">{data.temp}°</p>
      <p className="opacity-70">{data.condition}</p>

      <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
        <div>Feels {data.feelsLike}°</div>
        <div>Humidity {data.humidity}%</div>
        <div>Wind {data.wind} km/h</div>
      </div>
    </div>
  );
}
