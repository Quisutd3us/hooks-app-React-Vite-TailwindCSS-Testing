import PropTypes from "prop-types";
import {memo} from "react";

const ButtonCounter = memo(({onIncrement}) => {
  console.log('click..')
  return (
      <div className={'row'}>
        <div className="col-12">
          <button
              onClick={()=>onIncrement(5)}
              className={'btn btn-info text-white font-bold'}
          > +5
          </button>
        </div>
      </div>
  );
});

ButtonCounter.propTypes={
  onIncrement: PropTypes.func.isRequired
}

export default ButtonCounter;