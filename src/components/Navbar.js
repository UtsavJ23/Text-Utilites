import Proptypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">
          {props.name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  name: Proptypes.string.isRequired,
  about: Proptypes.string
};

Navbar.defaultProps = {
  name: "TextUtil",
  about: "About"
};

export default Navbar;
