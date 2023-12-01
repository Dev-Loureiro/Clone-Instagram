import PropTypes from "prop-types";

function Logo({ urlImg, altImg }) {
  return (
    <>
      <img src={urlImg} alt={altImg} />
    </>
  );
}

Logo.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};

export default Logo;
