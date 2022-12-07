import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Ylatunniste = (props) => {
  const { turvataso } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Urheilijat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/athletes/add" className="nav-link">
                Lisää urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Tietoa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};
export default Ylatunniste;
