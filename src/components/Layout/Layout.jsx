import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Layout.css";
import { toggleDarkMode } from "../../Redux/Actions/DarkModeActions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  console.log('Dark mode is:' + darkMode);

  return (
    <div
      className={`container-fluid h-100 p-0 m-0 ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="row navbar p-0 m-0">
        <Navbar />
        <button onClick={() => dispatch(toggleDarkMode())}>
          Toggle Dark Mode
        </button>
      </div>

      <div className="content p-0 m-0 overflow-auto">{children}</div>

      <div className="row footer p-0 m-0">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
