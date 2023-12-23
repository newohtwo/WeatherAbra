// @ts-ignore
import axios from "axios";

const apiKey = process.env.REACT_APP_ACCU_WEATHER_API_KEY;

const http = axios.create({
  baseURL: "http://dataservice.accuweather.com",
});

// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=c2E6KBkzu9C7naQIe5bWrFbSwi9S2vDp&q=tel%20aviv
export const getLocationsUsingAutocomplete = (query) => {
  const url = `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`;
  return http.get(url).then((response) => response.data);
};

export const getWeatherForecastData = (key) => {
  const url = `/currentconditions/v1/${key}?details=true&apikey=${apiKey}`;
  return http.get(url).then((response) => response.data);
};

export const getWeatherForecastFiveDays = (key) => {
  const url = `/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`;
  return http.get(url).then((response) => response.data);
};

export const getWeatherDataByKey = async (key) => {
  try {
    const currentWeather = await getWeatherForecastData(key);
    const fiveDayForecast = await getWeatherForecastFiveDays(key);

    // Combine the data and return
    return {
      currentWeather,
      fiveDayForecast,
    };
  } catch (error) {
    // Handle errors
    console.error("Error fetching weather data:", error);
    throw error; // Propagate the error up the chain
  }
};
