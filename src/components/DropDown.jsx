import { useMemo } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { login, currentUser } = useAuthContext();
  return (
    !currentUser && (
      <button
        type="button"
        className="btn btn-warning"
        onClick={login}
      >
        Login
      </button>
    )
  );
};

const LogOut = () => {
  const { logout, currentUser } = useAuthContext();
  return (
    !!currentUser && (
      <button
        type="button"
        className="btn btn-danger"
        onClick={logout}
      >
        Logout
      </button>
    )
  );
};

const DropDown = () => {
  const { currentUser } = useAuthContext();

  const username = useMemo(() => {
    return currentUser?.displayName || "Profile";
  }, [currentUser]);

  const avatar = useMemo(() => {
    return !!currentUser ? (
      <img
        src={currentUser?.photoURL}
        alt={currentUser?.displayName}
        className="avatar"
        width="34"
        height="34"
      />
    ) : (
      "Login"
    );
  }, [currentUser]);

  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      {" "}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {avatar}
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <a
              className="dropdown-item text-center"
              href="/"
            >
             {currentUser && (
               <Link to="/profile">{username}</Link>
             )}
            </a>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </li>
          <div className="d-flex justify-content-center">
            <LogIn />
            <LogOut />
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default DropDown;
