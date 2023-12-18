import React from "react";

export const FavoriteWeatherBlock = () => {
  return (
    <div className="card m-2 p-2 card-body d-inline-flex justify-content">
      <h2>id</h2>
      <h2 className="card-title">name</h2>
      <div className="card-text">
        <p>current weather</p>
        <p>degrees</p>
      </div>
    </div>
  );
};
