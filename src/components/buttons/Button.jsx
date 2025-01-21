import { Link } from "react-router-dom";

import PropTypes from "prop-types"; // Import PropTypes

const Button = ({ label, className, onClick, id, linkTo, type }) => {
  return (
    <Link to={linkTo}>
      <button id={id} className={className} onClick={onClick} type={type || "button"}>
        {label}
        
      </button>
    </Link>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // label should be a string and is required
  className: PropTypes.string, // className should be a string (optional)
  onClick: PropTypes.func.isRequired, // onClick should be a function and is required
  id: PropTypes.string,
  linkTo: PropTypes.string, 
  type: PropTypes.string,
  
  // id should be a string (optional)
};

Button.defaultProps = {
  className: "", // Default value for className
  id: "", // Default value for id
};
export default Button;
