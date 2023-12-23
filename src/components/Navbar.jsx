// @ts-nocheck
// @ts-ignore
import { useDispatch, useSelector } from "react-redux";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { changeToC, changeToF } from "../Redux/Actions/DegreesActions";

const Navbar = () => {

  
  const degreesUnit = useSelector(state => state.degrees);
  const dispatch = useDispatch();
  const changeDegrees = () => {
    console.log(degreesUnit)
    if(degreesUnit){
      dispatch(changeToF())
    }else{
      dispatch(changeToC())
    }
  }
  return (
    <div className="d-flex justify-content-between px-1">
      <div className="align-self-center">
        <p className="m-0 p-0">HELLO TO DEEZ NUTS</p>
      </div>

      <div>
        <button onClick={changeDegrees}>{degreesUnit ? "C*" : "F*"}</button>

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
