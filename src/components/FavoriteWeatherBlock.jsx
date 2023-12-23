import React from "react";

export const FavoriteWeatherBlock = ({ favoriteWeather, favoriteForecast }) => {
  console.log(favoriteWeather);
  // const minTemperaturesFor5Days =
    // favoriteForecast.DailyForecasts.Temperature.Minimum.Value;
  // const maxTemperaturesFor5Days =
    // favoriteForecast.DailyForecasts.Temperature.Maximum.Value;

  // const calculateTempToday = ({ favoriteForecast }) => {};

  return (
    <div className="card m-2 p-2 card-body d-inline-flex justify-content">
      {/* <h2>{favoriteWeather.Key}</h2> */}
      <h2 className="card-title">{favoriteWeather.key}</h2>
      <h2 className="card-title">{favoriteWeather.name}</h2>
      <h2 className="card-title">{favoriteWeather.weather}</h2>
      <h2 className="card-title">{favoriteWeather.lastKnownFahrenheit}</h2>
      <div className="card-text">
        <p>{/* {favoriteForecast.} */}</p>
      </div>
    </div>
  );
};
