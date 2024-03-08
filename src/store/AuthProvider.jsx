import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTES } from "../constants/routes.js";
import { usePageState } from "./PageStateProvider.jsx";
import { loginRequest } from "../api/auth/login.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setIsLoading, callActionStatusPopup } = usePageState();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    loginRequest(
      data,
      (res) => {
        console.log(res);

        if (res?.status === "error") {
          callActionStatusPopup(false, res.message);
        }
        // setUser(res.data.user);
        // setToken(res.token);
        // localStorage.setItem("token", res.token);
        // navigate(ROUTES.HOME);
      },
      () => {
        setIsLoading(false);
      },
    );
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    navigate(ROUTES.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
