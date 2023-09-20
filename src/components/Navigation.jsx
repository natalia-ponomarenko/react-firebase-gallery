import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Navigation = () => {
  const { currentUser } = useAuthContext();
  const { pathname } = useLocation();

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
          aria-current="page"
          to="/"
        >
          Home
        </Link>
      </li>
      {currentUser && (
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname === "/stockimages" ? "active" : ""}`}
            aria-current="page"
            to="/stockimages"
          >
            My Stocks Images
          </Link>
        </li>
      )}
       {currentUser && (
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname === "/profile" ? "active" : ""}`}
            aria-current="page"
            to="/profile"
          >
            Profile
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
