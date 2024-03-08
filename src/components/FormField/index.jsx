import { Input } from "../Input";
import PropTypes from "prop-types";
import { useState } from "react";
import { EyeHideIcon, EyeShownIcon } from "@/assets/icons";

import "./form-field.scss";

export const FormField = ({ name, ...props }) => {
  const [isShowValue, setIsShowValue] = useState(true);
  const isPasswordInput = props.type === "password";

  return (
    <div className="formField">
      <Input
        {...props}
        name={name}
        placeholder=" "
        type={isShowValue ? "text" : "password"}
      />
      <label>{name}</label>

      {isPasswordInput ? (
        <span
          className="passwordEyeIcon"
          onClick={() => setIsShowValue((prevValue) => !prevValue)}
        >
          {isShowValue ? <EyeHideIcon /> : <EyeShownIcon />}
        </span>
      ) : null}
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
