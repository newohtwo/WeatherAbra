import Layout from "./components/Layout/Layout";
import { RouterConfig } from "./navigation/RouterConfig";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { searchData, getWeatherData } from "./demoData/DemoData";

const App = () => {
  // Convert the array of objects to a JSON string
  const favoriteWeathersString = JSON.stringify(searchData);
  const favoriteWeathersTemperatureString = JSON.stringify(getWeatherData);

  // Store the JSON string in local storage
  localStorage.setItem("favoriteWeathers", favoriteWeathersString);
  localStorage.setItem("favoriteWeathersTemperature", favoriteWeathersTemperatureString);

  return (
    <>
      <Layout>
        <RouterConfig />
      </Layout>
    </>
  );
};

export default App;
