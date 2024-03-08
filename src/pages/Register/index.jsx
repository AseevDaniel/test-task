import "./register.scss";
import { AuthForm } from "../../components/index.js";
import { ROUTES } from "../../constants/routes.js";
import { useAuth } from "../../store/AuthProvider.jsx";
import { REGISTER_TEXT_CONTENT } from "../../constants/textContent.js";

export const Register = () => {
  const { registerAction } = useAuth();

  const registerFormContent = {
    formDataContent: REGISTER_TEXT_CONTENT,
    isShowFieldsRules: true,
    onSubmit: registerAction,
    redirectLink: ROUTES.LOGIN,
  };

  return (
    <div className="authPage register">
      <AuthForm formContent={registerFormContent} />
    </div>
  );
};
