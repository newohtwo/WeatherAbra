import React, { useEffect, useState } from "react";
import { FavoriteWeatherBlock } from "./FavoriteWeatherBlock";

export const Favorites = () => {
  const [favoriteWeathers, setFavoriteWeathers] = useState([]);
  const [favoriteForecast, setFavoriteForecast] = useState([]);

  useEffect(() => {
    setFavoriteWeathers(JSON.parse(localStorage.getItem("favoriteWeathers")));
  }, []);

  useEffect(() => {
    setFavoriteForecast(JSON.parse(localStorage.getItem("favoriteForecast")));
  }, []);

  console.log(favoriteWeathers);
  console.log('Favorite weathers is over here!');
  console.log(favoriteForecast);
  console.log('Favorite forecast is over here!');

  const favoriteWeathersBlock = () => {
    return favoriteWeathers.map((favoriteWeather, favoriteForecast) => {
      return <FavoriteWeatherBlock favoriteWeather = {favoriteWeather} favoriteForecast={favoriteForecast}/>
    })
  };

  return (
    <div
      className="container-fluid overflow-auto"
      style={{ maxHeight: "90vh" }}
    >
      <div className="d-flex-wrap justify-content-center flex-wrap"></div>
      {favoriteWeathersBlock()}
    </div>
  );
};
