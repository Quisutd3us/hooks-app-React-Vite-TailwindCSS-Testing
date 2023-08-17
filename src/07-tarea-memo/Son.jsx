import PropTypes from "prop-types";
import {memo} from "react";

export const Son = memo(({ number, onIncrement }) => {

    console.log('  I Regenerated :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => onIncrement( number ) }
        >
            { number }
        </button>
    )
});

Son.propTypes={
    number:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired
}
