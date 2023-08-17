
import PropTypes from "prop-types";
import {memo} from "react";

// eslint-disable-next-line react/display-name
const Display = memo(({counter}) => {
  console.log('change..')
  return (
      <small>{counter}</small>
  );
});

Display.propTypes = {
  counter:PropTypes.number.isRequired
};


export default Display;

