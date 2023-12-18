import React, { useEffect, useState } from "react";
import { FavoriteWeatherBlock } from "./FavoriteWeatherBlock";

export const Favorites = () => {
  const [favoriteWeathers, setFavoriteWeathers] = useState();

  useEffect(() => {
    setFavoriteWeathers(JSON.parse(localStorage.getItem("favoriteWeathers")));
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center flex-wrap">
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
      </div>
    </div>
  );
};
