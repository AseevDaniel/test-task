import { Input } from "../Input";
import PropTypes from "prop-types";

import "./form-field.scss";

export const FormField = ({ name, ...props }) => {
  return (
    <div className="formField">
      <Input {...props} name={name} placeholder=" " />
      <label>{name}</label>
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string,
};
