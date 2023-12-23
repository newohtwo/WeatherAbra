import { useEffect, useState } from "react";
import Search from "../../components/Search.js";
import WeatherInfo from "../../components/WeatherInfo";
import {
  getWeatherDataByKey,
  getWeatherForecastData,
} from "../../services/accuweather.js";
import {
  getWeatherForecastFiveDays,
  getWeatherData,
} from "../../demoData/DemoData.js";

const Home = (props) => {
  const [weatherData, setWeatherData] = useState({
    key: null,
    name: null,
    isFavorite: false,
  });

  useEffect(() => {
    //if has some quary data with key than make api call and set data to weather info
  }, []);

  const getWeatherKey = async (key, name) => {
    // make api call using the key
    let data = {};
    // const test = await getWeatherData();
    // const weatherData = getWeatherData; //api call to get weather
    // const weatherDataFiveDay = getWeatherForecastFiveDays; //api call to get forcast of that weather
    // const { currentWeather, fiveDayForecast } = await getWeatherData(key);

    data.key = key;
    data.name = name;

    //make here api call and fill the needed data into the state
    setWeatherData((old) => {
      return {
        ...old,
        key: key,
        name: name,
        isFavorite: checkIfExistsInStorage(),
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
      const exists = storedFavoriteWeathersArray.some((obj) =>
        Object.values(obj).includes(key)
      );
      if (exists) {
        return true;
      }
    }
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
