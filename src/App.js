import Layout from "./components/Layout/Layout";
import { RouterConfig } from "./navigation/RouterConfig";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Layout>
        <RouterConfig />
      </Layout>
    </>
  );
}

export default App;
