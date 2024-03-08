import "./link-item.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LinkItem = ({ children, ...props }) => {
  return (
    <Link className="linkItem" {...props}>
      {children}
    </Link>
  );
};

LinkItem.propTypes = {
  children: PropTypes.string,
};
