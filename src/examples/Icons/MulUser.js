import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function MulUser({ color, size }) {
  return (
    <svg
      height={size}
      width={size}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <path className="st0" d="M256,215.41c44.322,0,80.26-35.938,80.26-80.264c0-44.318-35.938-80.256-80.26-80.256 s-80.255,35.937-80.255,80.256C175.744,179.472,211.677,215.41,256,215.41z"></path>
        <path className="st0" d="M432.905,251.47c33.044,0,59.836-26.793,59.836-59.845c0-33.044-26.792-59.836-59.836-59.836 c-33.045,0-59.845,26.792-59.845,59.836C373.06,224.677,399.86,251.47,432.905,251.47z"></path>
        <path className="st0" d="M433.584,265.224c-23.007,0-40.602,7.161-53.326,16.717c2.694,5.893,4.603,11.587,5.725,16.816l0.55,2.572 v130.352h56.433c38.128,0,69.035-30.907,69.035-69.035v-45.151C507.878,298.247,483.108,265.224,433.584,265.224z"></path>
        <path className="st0" d="M79.096,131.788c-33.048,0-59.837,26.792-59.837,59.836c0,33.052,26.789,59.845,59.837,59.845 s59.841-26.793,59.841-59.845C138.937,158.581,112.144,131.788,79.096,131.788z"></path>
        <path className="st0" d="M0,317.497v45.151c0,38.128,30.907,69.035,69.035,69.035h56.432V301.33l0.55-2.572 c1.122-5.229,3.034-10.924,5.726-16.816c-12.729-9.556-30.323-16.717-53.326-16.717C28.892,265.224,4.126,298.247,0,317.497z"></path>
        <path className="st0" d="M256,233.86c-66.42,0-99.629,44.28-105.167,70.111v115.483c0,20.792,16.862,37.655,37.655,37.655h135.024 c20.793,0,37.655-16.862,37.655-37.655V303.971C355.633,278.14,322.421,233.86,256,233.86z"></path>
      </g>
    </svg>
  );
}

// Setting default values for the props of MulUser
MulUser.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the MulUser
MulUser.propTypes = {
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

export default MulUser;
