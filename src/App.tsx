import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import AQICard from "./components/AQICard";
import { getWeather, getAQI } from "./services/weatherApi";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [aqi, setAqi] = useState<any>(null);

  const search = async () => {
    const w = await getWeather(city);
    const a = await getAQI(w.lat, w.lon);
    setWeather(w);
    setAqi(a);
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-12 py-16">
      <h1 className="text-4xl font-bold text-indigo-400">WeatherAQI</h1>

      <SearchBar city={city} setCity={setCity} onSearch={search} />

      {weather && (
        <div className="flex gap-10 flex-wrap justify-center">
          <WeatherCard data={weather} />
          <AQICard data={aqi} />
        </div>
      )}

      <footer className="opacity-50 text-sm mt-20">
        Powered by OpenWeather API • Built with ❤️
      </footer>
    </div>
  );
}
