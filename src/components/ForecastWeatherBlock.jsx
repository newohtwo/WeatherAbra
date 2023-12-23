// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { changeToF, changeToC } from "../Redux/Actions/DegreesActions";
import { useEffect, useState } from "react";

const ForecastWeatherBlock = ({ dailyForecast }) => {
  // console.log(dailyForecast);
  const [minDegrees, setMinDegrees] = useState(0);
  const [maxDegrees, setMaxDegrees] = useState(0);
  const degreesUnit = useSelector((state) => state.degrees);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!degreesUnit) {
      setMinDegrees(dailyForecast.Temperature.Minimum.Value);
      setMaxDegrees(dailyForecast.Temperature.Maximum.Value);
    } else {
      setMinDegrees(
        parseInt(((dailyForecast.Temperature.Minimum.Value - 32) * 5) / 9)
      );
      setMaxDegrees(
        parseInt(((dailyForecast.Temperature.Maximum.Value - 32) * 5) / 9)
      )
    }
  }, [degreesUnit]);

  return (
    <li>
    <div className="card m-2 p-2 card-body d-inline-flex justify-content">
      {/* <h2>{favoriteWeather.Key}</h2> */}
      <h2 className="card-title">Min degrees: {minDegrees}{ degreesUnit ? '°C' : '°F'}</h2>
      <h2 className="card-title">Max degrees: {maxDegrees}{ degreesUnit ? '°C' : '°F'}</h2>
      <div className="card-text">
        <p>{dailyForecast.Day.IconPhrase}</p>

      </div>
    </div>
    </li>
  );
};

export default ForecastWeatherBlock;
