import { useEffect, useState } from "react";
import Search from "../../components/Search";
import WeatherInfo from "../../components/WeatherInfo";

const Home = (props) => {
  const [weatherData, setWeatherData] = useState(true);

  useEffect(() => {
    //if has some quary data with key than make api call and set data to weather info
  }, []);

  const getWeatherKey = (key) => {
    // make api call using the key
  };

  return (
    <div className="container-fluid border p-0 m-0">
      <div className="search d-flex justify-content-center m-2">
        <Search />
      </div>
      <div className="weather-content container-fluid p-0 m-0">
        {weatherData && <WeatherInfo />}
      </div>
    </div>
  );
};
export default Home;
