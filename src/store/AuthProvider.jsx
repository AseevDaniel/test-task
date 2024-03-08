import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTES } from "../constants/routes.js";
import { usePageState } from "./PageStateProvider.jsx";
import { loginRequest, registerRequest } from "../api/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setIsLoading, callActionStatusPopup } = usePageState();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const authUserSharedOperation = (data) => {
    if (data?.status === "error") {
      callActionStatusPopup(false, data.message);
      return;
    }
    callActionStatusPopup(true, data.message);
    setUser(data.user);
    setToken(data.user.email);
    localStorage.setItem("token", data.user.email);
    navigate(ROUTES.HOME);
  };

  const onActionShared = () => {
    setIsLoading(true);
  };
  const onFinallyShared = () => {
    setIsLoading(false);
  };

  const loginAction = async (data) => {
    onActionShared();
    loginRequest(
      data,
      (res) => {
        console.log(res);

        authUserSharedOperation(res);
      },
      onFinallyShared,
    );
  };

  const registerAction = async (data) => {
    onActionShared();
    console.log("register");
    registerRequest(
      data,
      (res) => {
        console.log(res);

        authUserSharedOperation(res);
      },
      onFinallyShared,
    );
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    navigate(ROUTES.LOGIN);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginAction, registerAction, logOut }}
    >
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
