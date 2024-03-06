import "./input.scss";
import PropTypes from "prop-types";

export const Input = ({ isError, ...props }) => {
  return (
    <input
      className={`input ${isError ? "input-error" : ""}`}
      type="text"
      {...props}
    />
  );
};

Input.propTypes = {
  isError: PropTypes.bool,
};
