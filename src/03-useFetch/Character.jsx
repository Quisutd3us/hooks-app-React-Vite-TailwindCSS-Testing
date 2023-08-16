import PropTypes from "prop-types";
const Character = ({name, status, species}) => {
  return (
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote">
            <p className="mb-0">{name}</p>
            <footer className="blockquote-footer my-1">
              Status: <cite title="Source Title">{status}</cite>{` , `}
              Species: <cite title="Source Title">{species}</cite>
            </footer>
          </blockquote>
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