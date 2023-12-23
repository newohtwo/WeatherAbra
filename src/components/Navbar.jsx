// @ts-ignore
import { Link } from "../../node_modules/react-router-dom/dist/index";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between px-1">
      <div className="align-self-center">
        <p className="m-0 p-0">HELLO TO MY THING</p>
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
