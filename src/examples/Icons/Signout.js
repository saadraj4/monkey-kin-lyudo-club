import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function Signout({ color, size }) {
  return (
    <svg
      fill="#000000"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="sign-out"
      className="icon glyph"
    >
      <path d="M20.49,3.84l-6-1.5A2,2,0,0,0,12,4.28V5H10A2,2,0,0,0,8,7V8a1,1,0,0,0,2,0V7h2V17H10V16a1,1,0,0,0-2,0v1a2,2,0,0,0,2,2h2v.72a2,2,0,0,0,.77,1.57,2,2,0,0,0,1.23.43,2.12,2.12,0,0,0,.49-.06l6-1.5A2,2,0,0,0,22,18.22V5.78A2,2,0,0,0,20.49,3.84Z"></path>
      <path d="M4.41,13H9a1,1,0,0,0,0-2H4.41l1.3-1.29A1,1,0,0,0,4.29,8.29l-3,3h0a1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33h0l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
    </svg>
  );
}

// Setting default values for the props of Signout
Signout.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Signout
Signout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Signout;
