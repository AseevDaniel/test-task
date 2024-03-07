import "./register.scss";
import { AuthForm } from "../../components/index.js";

export const Register = () => {
  return (
    <div className="authPage register">
      <AuthForm isRegister />
    </div>
  );
};
