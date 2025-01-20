import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function GameRules({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>game-rules</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1869.000000, -741.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="game-rules" transform="translate(153.000000, 450.000000)">
              <path
                className="color-background"
                d="M464 0c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h416zM432 464V48c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zM336 216H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zM336 288H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zM336 360H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of GameRules
GameRules.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the GameRules
GameRules.propTypes = {
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

export default GameRules;
