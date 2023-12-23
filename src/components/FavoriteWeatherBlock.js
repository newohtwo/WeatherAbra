import React from "react";

export const FavoriteWeatherBlock = ({ favoriteWeather }) => {

  return (
    <div className="card m-2 p-2 card-body d-inline-flex justify-content">
      {/* <h2>{favoriteWeather.Key}</h2> */}
      <h2 className="card-title">{favoriteWeather.LocalizedName}</h2>
      <h2 className="card-title">{favoriteWeather.Country.LocalizedName}</h2>
      <div className="card-text">
        <p>C</p>
      </div>
    </div>
  );
};