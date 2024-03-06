import "./link.scss";
import PropTypes from "prop-types";

export const Link = ({ children, ...props }) => {
  return (
    <a className="link" {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string,
};
