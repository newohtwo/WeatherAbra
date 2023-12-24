import ForecastWeatherBlock from "./ForecastWeatherBlock";
import { v4 as uuid4 } from "uuid";

const WeatherInfo = ({ weatherData }) => {
  const { weather,weatherForcastFiveDaysArr,key,name,isFavorite } = weatherData;
  console.log(weatherForcastFiveDaysArr)

  const addToFavorites = () => {
    const data = {
      key: key,
      name: name,
      weather: weather.WeatherText,
      lastKnownFahrenheit:weather.Temperature.Imperial.Value,
    }

    const storedFavoriteWeathersString = localStorage.getItem("favoriteWeathers");
    let storedFavoriteWeathersArray = JSON.parse(storedFavoriteWeathersString);
    if(storedFavoriteWeathersArray === null){
      storedFavoriteWeathersArray = [];
    }
    storedFavoriteWeathersArray.push(data);
    const favoriteWeathersString = JSON.stringify(storedFavoriteWeathersArray);
    localStorage.setItem("favoriteWeathers", favoriteWeathersString);
    
  }


  return (
    <div className="border">
      <div className="">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h1>{name}</h1>
          </div>
          <div className="d-flex align-self-center">
            {isFavorite ? (
              <img
                style={{ width: "20px" }}
                src="/assets/heart_active.svg"
                
              />
            ) : (
              <img
                style={{ width: "20px" }}
                src="/assets/heart_not_active.svg"
               
              />
            )}
            <button onClick={addToFavorites} className="m-2">Add to favorites</button>
          </div>
        </div>
      </div>
      <div className="">
        <h2>{weather.WeatherText} </h2>
      </div>
      <div className="">
        <ul className="d-flex flex-wrap">
          {weatherForcastFiveDaysArr.map((data) => {
            const randomKey = uuid4();
            return (
              <ForecastWeatherBlock key={randomKey} dailyForecast={data} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
