import { Login, Register } from "./pages/index.js";
import "./App.css";
import { Loader } from "./components/Loader/index.jsx";

function App() {
  return (
    <>
      <Loader />
      <Login />
      {/*<Register />*/}
    </>
  );
}

export default App;
