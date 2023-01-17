import OpenWeatherAPI, { CurrentWeather } from "openweather-api-node";

// https://www.npmjs.com/package/openweather-api-node
const weather = new OpenWeatherAPI({
  key: "571250bdaad65485c00272ada2e704d2",
  units: "imperial",
});

// TODO: Add logic to get current weather by city name
export function getCurrentWeatherByCity(city: string): Promise<CurrentWeather> {
  return weather.getCurrent();
}
