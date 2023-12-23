import React, { useEffect, useState } from "react";
import { FavoriteWeatherBlock } from "./FavoriteWeatherBlock";
import { getWeatherData } from "../demoData/DemoData";

export const Favorites = () => {
  const [favoriteWeathers, setFavoriteWeathers] = useState([]);
  const [favoriteWeathersTemperature, setFavoriteWeathersTemperature] =
    useState([]);

  useEffect(() => {
    setFavoriteWeathers(JSON.parse(localStorage.getItem("favoriteWeathers")));
  }, []);

  useEffect(() => {
    setFavoriteWeathersTemperature(
      JSON.parse(localStorage.getItem("favoriteWeathersTemperature"))
    );
  }, []);

  // console.log(favoriteWeathers);
  // console.log("Favorite weathers is over here!");
  // console.log(favoriteWeathersTemperature.Temperature);

  const favoriteWeathersBlock = () => {
    // need to map the favoriteWeathersTemperature
    return favoriteWeathers.map(
      (favoriteWeather) => {
        return (
          <FavoriteWeatherBlock
            favoriteWeather={favoriteWeather}
            // favoriteWeatherTemperature={favoriteWeatherTemperature}
          />
        );
      }
    );
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
