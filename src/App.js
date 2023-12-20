import Layout from "./components/Layout/Layout";
import { RouterConfig } from "./navigation/RouterConfig";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { searchData, getWeatherForecastFiveDays } from "./demoData/DemoData";

const App = () => {
  // Convert the array of objects to a JSON string
  const favoriteWeathersString = JSON.stringify(searchData);
  // const favoriteForecastString = JSON.stringify(getWeatherForecastFiveDays);

  // Store the JSON string in local storage
  localStorage.setItem("favoriteWeathers", favoriteWeathersString);
  // localStorage.setItem("favoriteForecast", favoriteForecastString);

  return (
    <>
      <Layout>
        <RouterConfig />
      </Layout>
    </>
  );
};

export default App;
