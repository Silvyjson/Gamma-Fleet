import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Button = (props) => {
  const { label, className, onClick, disabled } = props;

  return (
    <button disabled={disabled} type="submit" className={`buttonStyle ${className}`} onClick={onClick}>{label}</button>
  );
};

export const Input = (props) => {
  const { placeholder, type, className, htmlFor, label, id, name, value, onChange, disabled } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <span className="inputFormStyle">
      <label htmlFor={htmlFor} >{label}</label>
      <input
        type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
        placeholder={placeholder}
        className={`InputStyle ${className}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
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

export default Button;