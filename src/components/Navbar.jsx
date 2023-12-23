// @ts-ignore
import { useDispatch } from "react-redux";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { changeToC, changeToF } from "../Redux/Actions/DegreesActions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between px-1">
      <div className="align-self-center">
        <p className="m-0 p-0">HELLO TO DEEZ NUTS</p>
      </div>

      <div>
        <button onClick={() => dispatch(changeToC())}>Change to Celsius</button>
        <button onClick={() => dispatch(changeToF())}>
          Change to Fahrenheit
        </button>
      </div>

      <div className="align-self-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
