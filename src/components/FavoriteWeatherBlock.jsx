import React from "react";
// @ts-ignore
import { useNavigate  } from 'react-router-dom';
export const FavoriteWeatherBlock = ({ favoriteWeather }) => {
  const navigate = useNavigate();

  const sentToHome = () =>{
    navigate(`/${favoriteWeather.key}/${favoriteWeather.name}`);
  }

  return (
    <div className="card m-2 p-2 card-body d-inline-flex justify-content" onClick={sentToHome}>
      {/* <h2>{favoriteWeather.Key}</h2> */}
      <h3 className="card-title">{favoriteWeather.key}</h3>
      <div className="card-text">
        <p className="card-title">{favoriteWeather.name}</p>
        <p className="card-title">{favoriteWeather.weather}</p>
        <p className="card-title">{favoriteWeather.lastKnownFahrenheit}</p>
      </div>
    </div>
  );
};
