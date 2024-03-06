import "./form-field.scss";
import { Input } from "../Input/index.jsx";
import PropTypes from "prop-types";

export const FormField = ({ patterns, name, onChange, ...props }) => {
  const onInputValueChange = (e) => {
    const result = patterns(e.target.value);
    console.log(result);

    onChange(e);
  };

  return (
    <div className="formField">
      <Input {...props} onChange={onInputValueChange} placeholder=" " />
      <label>{name}</label>
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  patterns: PropTypes.func,
};
