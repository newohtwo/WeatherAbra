// @ts-ignore
import axios from "axios";

const apiKey = process.env.REACT_APP_ACCU_WEATHER_API_KEY;

const http = axios.create({
  baseURL: "http://dataservice.accuweather.com",
});

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
