import React from "react";

export const FavoriteWeatherBlock = ({ favoriteWeather, favoriteForecast }) => {
  // const minTemperaturesFor5Days =
    // favoriteForecast.DailyForecasts.Temperature.Minimum.Value;
  // const maxTemperaturesFor5Days =
    // favoriteForecast.DailyForecasts.Temperature.Maximum.Value;

  // const calculateTempToday = ({ favoriteForecast }) => {};

  return (
    <div className="card m-2 p-2 card-body d-inline-flex justify-content">
      {/* <h2>{favoriteWeather.Key}</h2> */}
      <h2 className="card-title">{favoriteWeather.LocalizedName}</h2>
      <h2 className="card-title">{favoriteWeather.Country.LocalizedName}</h2>
      <div className="card-text">
        <p>{/* {favoriteForecast.} */}</p>
      </div>
    </div>
  );
};
