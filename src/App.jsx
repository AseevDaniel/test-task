import { AdminPanel, Login, Register, NotFound } from "./pages/index.js";
import "./App.css";
import { Loader, PrivateRoute, ActionPopup } from "@/components";
import AuthProvider from "./store/AuthProvider.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { usePageState } from "./store/PageStateProvider.jsx";
import { ROUTES } from "./constants/routes.js";

function App() {
  const { isLoading } = usePageState();

  return (
    <>
      {isLoading && <Loader />}
      <ActionPopup />
      <BrowserRouter>
        <AuthProvider>
          <>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path={ROUTES.HOME} element={<AdminPanel />} />
              </Route>
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.REGISTER} element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
