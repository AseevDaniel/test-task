import "./confirm-password.scss";
import { FormField } from "../../../FormField/index.jsx";
import PropTypes from "prop-types";
import { Button } from "../../../Button/index.jsx";
import { useRef } from "react";

export const ConfirmPassword = ({ onEnter }) => {
  const inputRef = useRef(null);

  return (
    <div className="confirmPassword">
      <h2>Please, confirm your current password to continue</h2>
      <FormField innerRef={inputRef} name="password" type="password" />
      <Button onClick={() => onEnter(inputRef?.current?.value)}>Submit</Button>
    </div>
  );
};

ConfirmPassword.propTypes = {
  onEnter: PropTypes.func,
};
