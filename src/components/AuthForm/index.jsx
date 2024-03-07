import PropTypes from "prop-types";
import { useState } from "react";
import {
  emailPattern,
  getIsSuccsessPattern,
  passwordPattern,
} from "@/helpers/patterns.js";
import { emailErrors, passwordErrors } from "@/constants/errors.js";
import {
  LOGIN_TEXT_CONTENT,
  REGISTER_TEXT_CONTENT,
} from "@/constants/textContent.js";
import { FormField } from "../FormField/index.jsx";
import { ErrorPermissions } from "../ErrorPermissions/index.jsx";
import { Button } from "../Button/index.jsx";
import { Link } from "../Link/index.jsx";

import "./auth-form.scss";

export const AuthForm = ({ isRegister }) => {
  const formDataContent = isRegister
    ? REGISTER_TEXT_CONTENT
    : LOGIN_TEXT_CONTENT;

  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const isEmailError =
    !getIsSuccsessPattern(emailPattern(input.email)) && !isFirstSubmit;
  const isPasswordError =
    !getIsSuccsessPattern(passwordPattern(input.password)) && !isFirstSubmit;
  const isDisableSubmit = isEmailError | isPasswordError;

  const isShownErrorField = isRegister || isDisableSubmit;

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    setIsFirstSubmit(false);
    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="authForm">
      <h2>{formDataContent.title}</h2>
      <form className="form" onSubmit={handleSubmitEvent}>
        <div className="formControl">
          <FormField
            name="email"
            onChange={handleInput}
            isError={isEmailError}
          />
          {isShownErrorField ? (
            <ErrorPermissions
              currentPermissions={emailPattern(input.email)}
              errorMessages={emailErrors}
            />
          ) : null}
        </div>
        <div className="formControl">
          <FormField
            name="password"
            type="password"
            onChange={handleInput}
            isError={isPasswordError}
          />
          {isShownErrorField ? (
            <ErrorPermissions
              title="Your password should:"
              currentPermissions={passwordPattern(input.password)}
              errorMessages={passwordErrors}
            />
          ) : null}
        </div>
        <Button disabled={isDisableSubmit} type="submit">
          Submit
        </Button>

        <span className="anotherPageLink">
          {formDataContent.linkText} <Link>{formDataContent.linkValue}</Link>
        </span>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  isRegister: PropTypes.bool,
};
