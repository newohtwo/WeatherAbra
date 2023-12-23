import ForecastWeatherBlock from "./ForecastWeatherBlock";

const WeatherInfo = ({ weatherData }) => {
  const { weather,weatherForcastFiveDaysArr,key,name,isFavorite } = weatherData;
  console.log(weatherForcastFiveDaysArr)
  return (
    <div className="border">
      <div className="">
        <div className="d-flex justify-content-between">
          <div>{name}</div>
          <div className="d-flex align-self-center">
            {isFavorite ? (
              <img
                style={{ width: "20px" }}
                src="/assets/heart_active.svg"
                className=""
              />
            ) : (
              <img
                style={{ width: "20px" }}
                src="/assets/heart_not_active.svg"
                className=""
              />
            )}
            <button className="m-2">add to favorites</button>
          </div>
        </div>
      </div>
      <div className="">{weather.WeatherText}</div>
      <div className="">
        <ul>
        {weatherForcastFiveDaysArr.map((data) => {
          return (<ForecastWeatherBlock dailyForecast = {data}/>)
        })}
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
