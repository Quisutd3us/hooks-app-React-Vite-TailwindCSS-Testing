import React from "react";
import PropTypes from "prop-types";

const Display = React.memo(({counter}) => {
  console.log('change..')
  return (
      <small>{counter}</small>
  );
});

Display.propTypes = {
  counter:PropTypes.number.isRequired
};


export default Display;

