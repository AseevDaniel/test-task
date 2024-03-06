import { useState } from "react";
import { Button, ErrorPermissions, FormField } from "@/components";
import {
  passwordPattern,
  emailPattern,
  getIsSuccsessPattern,
} from "../../helpers/patterns.js";
import { emailErrors, passwordErrors } from "../../constants/errors.js";

import "./login.scss";

export const Login = () => {
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
    <div className="login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmitEvent}>
        <div className="form_control">
          <FormField
            name="email"
            onChange={handleInput}
            isError={isEmailError}
          />
          <ErrorPermissions
            currentPermissions={emailPattern(input.email)}
            errorMessages={emailErrors}
          />
        </div>
        <div className="form_control">
          <FormField
            name="password"
            onChange={handleInput}
            isError={isPasswordError}
          />
          <ErrorPermissions
            title={"Your password should:"}
            currentPermissions={passwordPattern(input.password)}
            errorMessages={passwordErrors}
          />
        </div>
        <Button disabled={isDisableSubmit} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
