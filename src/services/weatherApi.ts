const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeather(city: string) {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found or API error");
  }

  const data = await res.json();

  return {
    name: data.name,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    condition: data.weather[0].main,
    lat: data.coord.lat,
    lon: data.coord.lon,
  };
}


export async function getAQI(lat: number, lon: number) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const data = await res.json();

  const aqi = data.list[0].main.aqi * 50;

  if (aqi <= 50) return { aqi, label: "Good", message: "Air quality is good." };
  if (aqi <= 100)
    return { aqi, label: "Moderate", message: "Acceptable air quality." };
  if (aqi <= 150)
    return {
      aqi,
      label: "Unhealthy",
      message: "Sensitive groups affected.",
    };

  return {
    aqi,
    label: "Very Unhealthy",
    message: "Limit outdoor exposure.",
  };
}
