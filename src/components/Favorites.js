import React, { useEffect, useState } from "react";
import { FavoriteWeatherBlock } from "./FavoriteWeatherBlock";

export const Favorites = () => {
  const [favoriteWeathers, setFavoriteWeathers] = useState();

  useEffect(() => {
    setFavoriteWeathers(JSON.parse(localStorage.getItem("favoriteWeathers")));
  }, []);

  return (
    <div className="container-fluid container-sm">
      <div>
        Your favorite weather areas!
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div className="d-inline-flex justify-content-center">
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
        <FavoriteWeatherBlock />
      </div>
    </div>
  );
};
