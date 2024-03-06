import { useState } from "react";
import viteLogo from "/vite.svg";
import { Login, Register } from "./pages/index.js";
import { Button, Input } from "./components/index.js";
import { emailPattern, passwordPattern } from "./helpers/patterns.js";

import "./App.css";
import { FormField } from "./components/FormField/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      {/*<FormField />*/}
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1 className="hello">Vite + React</h1>*/}
      {/*<Register></Register>*/}
      {/*<Login />*/}
      {/*<Button />*/}
      {/*<Input />*/}

      {/*<input*/}
      {/*  onChange={(e) => console.log(emailPattern(e.target.value).isEmail)}*/}
      {/*  type="text"*/}
      {/*/>*/}
      {/*<input*/}
      {/*  onChange={(e) => console.log(passwordPattern(e.target.value))}*/}
      {/*  type="text"*/}
      {/*/>*/}

      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  );
}

export default App;
