import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">MindScale</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/bmi" className="nav-link">
              BMI Check
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/quiz-home" className="nav-link">
              Mind Quiz
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              Our Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
