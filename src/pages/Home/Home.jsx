import { useEffect, useState } from "react";
import Search from "../../components/Search.jsx";
import WeatherInfo from "../../components/WeatherInfo.jsx";
import {
  getWeatherDataByKey,
  getWeatherForecastData,
  // @ts-ignore
} from "../../services/AccuWeather.js";
// @ts-ignore
import { useParams } from "react-router-dom";

const Home = (props) => {
  const [weatherData, setWeatherData] = useState({
    key: null,
    name: null,
    isFavorite: false,
    weather: null,
    weatherForecastFiveDaysArr: null,
  });
  const { favoriteKey, favoriteName } = useParams();

  useEffect(() => {
    console.log(favoriteKey, favoriteName);
    checkUrlParamsFavoriteWeather(favoriteKey, favoriteName);
  }, []);

  const checkUrlParamsFavoriteWeather = async (key, name) => {
    if (favoriteKey !== undefined) {
      const { currentWeather, fiveDayForecast } = await getWeatherDataByKey(
        key
      );

      let data = {};
      data.weather = currentWeather[0];
      data.weatherForcastFiveDaysArr =
        fiveDayForecast.DailyForecasts;
      data.key = key;
      data.name = name;

      //make here api call and fill the needed data into the state
      setWeatherData(() => {
        return {
          ...data,
          isFavorite: checkIfExistsInStorage(key),
        };
      });
    }
  };
  const getWeatherKey = async (key, name) => {
    // make api call using the key
    let data = {};
    // const test = await getWeatherData();
    // const weatherData = getWeatherData; //api call to get weather
    // const weatherDataFiveDay = getWeatherForecastFiveDays; //api call to get forcast of that weather
    const { currentWeather, fiveDayForecast } = await getWeatherDataByKey(key);
    console.log(currentWeather);
    console.log(fiveDayForecast);
    data.weather = currentWeather[0];
    data.weatherForcastFiveDaysArr = fiveDayForecast.DailyForecasts;

    data.key = key;
    data.name = name;

    console.log(data);

    //make here api call and fill the needed data into the state
    setWeatherData(() => {
      return {
        ...data,
        isFavorite: checkIfExistsInStorage(key),
      };
    });
  };

  const checkIfExistsInStorage = (key) => {
    const storedFavoriteWeathersString =
      localStorage.getItem("favoriteWeathers");
    const storedFavoriteWeathersArray = JSON.parse(
      storedFavoriteWeathersString
    );

    if (storedFavoriteWeathersArray !== null) {
      return storedFavoriteWeathersArray.some((obj) =>
        Object.values(obj).includes(key)
      );
    }

    return false;
  };

  return (
    <div className="container-fluid border p-0 m-0">
      <div className="search d-flex justify-content-center m-2">
        <Search getWeatherKey={getWeatherKey} />
      </div>
      <div className="weather-content container-fluid p-0 m-0">
        {weatherData.key && <WeatherInfo weatherData={weatherData} />}
      </div>
    </div>
  );
};
export default Home;
