import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTES } from "../constants/routes.js";
import { usePageState } from "./PageStateProvider.jsx";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setIsLoading } = usePageState();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("token", res.token);
        navigate(ROUTES.HOME);
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
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
