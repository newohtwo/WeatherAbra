import React, { useEffect, useState } from 'react'
import { FavoriteWeatherBlock } from './FavoriteWeatherBlock';

export const Favorites = () => {
  const [favoriteWeathers, setFavoriteWeathers] = useState();

  useEffect (() => {
    setFavoriteWeathers(JSON.parse(localStorage.getItem('favoriteWeathers')));
  });

  return (
    <div>
      <FavoriteWeatherBlock />
      <FavoriteWeatherBlock />
      <FavoriteWeatherBlock />
      <FavoriteWeatherBlock />
    </div>
  )
}
