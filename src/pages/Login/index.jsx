import { useState } from "react";

import "./login.scss";
import { FormField } from "../../components/index.js";
import { passwordPattern } from "../../helpers/patterns.js";

export const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <div className="form_control">
        <FormField name="email" onChange={handleInput} />
      </div>
      <div className="form_control">
        <FormField
          patterns={passwordPattern}
          name="password"
          onChange={handleInput}
        />

        {/*<label htmlFor="password">Password:</label>*/}
        {/*<input*/}
        {/*  type="password"*/}
        {/*  id="password"*/}
        {/*  name="password"*/}
        {/*  aria-describedby="user-password"*/}
        {/*  aria-invalid="false"*/}
        {/*  onChange={handleInput}*/}
        {/*/>*/}
        {/*<div id="user-password" className="sr-only">*/}
        {/*  your password should be more than 6 character*/}
        {/*</div>*/}
      </div>
      <button className="btn-submit">Submit</button>
    </form>
  );
};
