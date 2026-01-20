export interface WeatherData {
  name: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  condition: string;
}

export interface AQIData {
  aqi: number;
  label: string;
  message: string;
}
