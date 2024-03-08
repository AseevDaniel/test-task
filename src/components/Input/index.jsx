import "./input.scss";
import PropTypes from "prop-types";

export const Input = ({ isError, innerRef, ...props }) => {
  return (
    <>
      <input
        className={`input ${isError ? "input-error" : ""}`}
        {...props}
        ref={innerRef}
      />
    </>
  );
};

Input.propTypes = {
  isError: PropTypes.bool,
  innerRef: PropTypes.object,
};
