import PropTypes from "prop-types";
import { useState } from "react";
import {
  emailPattern,
  getIsSuccsessPattern,
  passwordPattern,
} from "@/helpers/patterns.js";
import { EMAIL_ERRORS, PASSWORD_ERRORS } from "@/constants/errors.js";
import {
  LOGIN_TEXT_CONTENT,
  REGISTER_TEXT_CONTENT,
} from "@/constants/textContent.js";
import { FormField } from "../FormField";
import { ErrorPermissions } from "../ErrorPermissions";
import { Button } from "../Button";
import { LinkItem } from "../LinkItem/";
import { ROUTES } from "../../constants/routes.js";
import { useAuth } from "../../store/AuthProvider.jsx";

import "./auth-form.scss";

export const AuthForm = ({ isRegister }) => {
  const { loginAction } = useAuth();
  const formDataContent = isRegister
    ? REGISTER_TEXT_CONTENT
    : LOGIN_TEXT_CONTENT;

  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const isEmailCorrect = getIsSuccsessPattern(emailPattern(input.email));
  const isPasswordCorrect = getIsSuccsessPattern(
    passwordPattern(input.password),
  );

  const isEmailError = !isEmailCorrect && !isFirstSubmit;
  const isPasswordError = !isPasswordCorrect && !isFirstSubmit;
  const isDisableSubmit = isEmailError | isPasswordError;

  const isShownErrorField = isRegister || isDisableSubmit;

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    // !isEmailError && !isPasswordError

    setIsFirstSubmit(false);
    if (isEmailCorrect && isPasswordCorrect) {
      loginAction({
        ...input,
      });
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
              errorMessages={EMAIL_ERRORS}
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
              errorMessages={PASSWORD_ERRORS}
            />
          ) : null}
        </div>
        <Button disabled={isDisableSubmit} type="submit">
          Submit
        </Button>

        <span className="anotherPageLink">
          {formDataContent.linkText}{" "}
          <LinkItem to={isRegister ? ROUTES.LOGIN : ROUTES.REGISTER}>
            {formDataContent.linkValue}
          </LinkItem>
        </span>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  isRegister: PropTypes.bool,
};
