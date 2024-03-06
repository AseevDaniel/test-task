import "./button.scss";
import PropTypes from "prop-types";

export const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};
