import PropTypes from "prop-types";

const Input = ({
  id, // Accept id from parent
  type = "text",
  name, // For the form
  value, // For the state
  onChange,
  placeholder,
  required = false,
  ...props
}) => {
  return (
    <div>
      <input
        id={id || name} // Use the passed 'id' or fall back to 'name'
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
};

// PropTypes validation
Input.propTypes = {
  id: PropTypes.string, // Added 'id' prop-type validation
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
