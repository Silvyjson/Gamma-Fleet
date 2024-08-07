import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Button = (props) => {
  const { label, className, onClick, type, disabled } = props;

  return (
    <button disabled={disabled} type={type} className={`buttonStyle ${className}`} onClick={onClick}>{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

export const Input = (props) => {
  const { placeholder, type, className, label, name, value, onChange, required, disabled } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <span className="inputFormStyle">
      <label htmlFor={name} >{label}</label>
      <input
        type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
        placeholder={placeholder}
        className={`InputStyle ${className}`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete="on"
      />
      <div className="password-container">
        {type === "password" && (
          <FontAwesomeIcon
            icon={isPasswordVisible ? "fa-regular fa-eye" : "fa-solid fa-eye-low-vision"}
            onClick={togglePasswordVisibility}
            className="font-awesome"
          />
        )}
      </div>
    </span>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export const Select = ({ label, name, value, options, onChange, className }) => (
  <span className="inputFormStyle">
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      className={`selectStyle ${className}`}
      required
      onChange={onChange} >
      <option value="" disabled>Enter</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </span>
);

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  className: PropTypes.string,
}


export default Button;