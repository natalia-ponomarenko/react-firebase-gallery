import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/"
        >
          Home
        </Link>
        </li>
        <li className="nav-item">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/stockimages"
        >
          My Stocks Images
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
