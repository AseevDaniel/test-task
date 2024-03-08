import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import PageStateProvider from "./store/PageStateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PageStateProvider>
    <App />
  </PageStateProvider>,
);
