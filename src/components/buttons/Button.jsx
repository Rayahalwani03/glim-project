import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const Button = ({
  label,
  className = "", // Default value for className
  onClick = () => {}, // Default value for onClick
  id = "", // Default value for id
  linkTo,
  type = "button",
  children,
}) => {
  return linkTo ? (
    <Link to={linkTo}>
      <button id={id} className={className} onClick={onClick} type={type}>
        {children || label}
      </button>
    </Link>
  ) : (
    <button id={id} className={className} onClick={onClick} type={type}>
      {children || label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // label should be a string and is required
  className: PropTypes.string, // className should be a string (optional)
  onClick: PropTypes.func, // onClick should be a function and is required
  id: PropTypes.string,
  linkTo: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node, // Accepts any valid JSX (text, SVG, etc.)
};

export default Button;