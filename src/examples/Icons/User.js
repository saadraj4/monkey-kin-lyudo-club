import PropTypes from "prop-types";
// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function User({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 512" // Update the viewBox according to the new icon's dimensions
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>user</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1869.000000, -293.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="user" transform="translate(153.000000, 2.000000)">
              {/* New path from FontAwesome icon */}
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                id="Path"
                opacity="0.6"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of User
User.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the User
User.propTypes = {
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

export default User;
