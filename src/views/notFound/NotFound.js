import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

const NotFound = () => {
  return (
    <div>
      Not found
      <br />
      <p>
        <Link to="/"></Link>
      </p>
    </div>
  );
};

export default NotFound;
