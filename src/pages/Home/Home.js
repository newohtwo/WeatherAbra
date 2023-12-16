import { useEffect, useState } from "react";
import Search from "../../components/Search";
import WeatherInfo from "../../components/WeatherInfo";

const Home = (props) => {
  const [weatherData, setWeatherData] = useState({ key: 0, name: "" });

  useEffect(() => {
    //if has some quary data with key than make api call and set data to weather info
  }, []);

  const getWeatherKey = (key, name) => {
    // make api call using the key
    let data = {};
    console.log(key, name);
    data.key = key;
    data.name = name;
    //
    setWeatherData((old) => old);
  };

  return (
    <div className="container-fluid border p-0 m-0">
      <div className="search d-flex justify-content-center m-2">
        <Search getWeatherKey={getWeatherKey} />
      </div>
      <div className="weather-content container-fluid p-0 m-0">
        {weatherData && <WeatherInfo />}
      </div>
    </div>
  );
};
export default Home;
