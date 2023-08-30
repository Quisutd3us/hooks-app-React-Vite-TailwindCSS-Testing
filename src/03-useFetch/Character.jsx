import PropTypes from "prop-types";
import {useLayoutEffect, useRef, useState} from "react";

const Character = ({name, status, species, gender, origin}) => {
  const dimensions = useRef()
  const [dimP, setDimP] = useState({
    width: 0,
    height: 0
  })


  useLayoutEffect(() => {
    const {width, height} = (dimensions.current.getBoundingClientRect())
    setDimP({width, height})
  }, [name])
  return (
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote flex flex-row">
            <p className="mb-0" ref={dimensions}>{name}</p>
            <footer className="blockquote-footer my-1 flex flex-column ">
              <p>Status: <cite title="Source Title">{status}</cite></p>
              <p>Species: <cite title="Source Title">{species}</cite></p>
              <p>Gender: <cite title="Source Title">{gender}</cite></p>
            </footer>
          </blockquote>
        </div>
        <div className="col-12">
          <code>{JSON.stringify(dimP)}</code>
        </div>
      </div>

  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Character;