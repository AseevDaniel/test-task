import { useState } from "react";
import PropTypes from "prop-types";
import { AuthForm } from "@/components/AuthForm/index.jsx";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount.jsx";
import { UPDATE_DATA_TEXT_CONTENT } from "@/constants/textContent.js";
import { useAuth } from "@/store/AuthProvider.jsx";
import { usePageState } from "@/store/PageStateProvider.jsx";
import { ConfirmPassword } from "../ConfirmPassword/index.jsx";
import "./user-settings.scss";

export const UserSettings = ({ isActive }) => {
  const { user } = useAuth();
  const { updateAction } = useAuth();
  const { setModalData } = usePageState();
  const { isHide, isComponentShown } = useDelayedUnmount(isActive);
  const [input, setInput] = useState({
    email: user.email,
    password: "",
    new_email: "",
    new_password: "",
  });

  const setNewUserData = (newInput) => {
    setInput((prev) => ({
      ...prev,
      new_email: newInput.email,
      new_password: newInput.password,
    }));
    setModalData(<ConfirmPassword onEnter={confirmUserPassword} />);
  };

  const confirmUserPassword = (password) => {
    console.log("hello");
    setModalData(null);
    updateAction({ ...input, password });
  };

  if (!isComponentShown) return null;

  const updateDataFormContent = {
    formDataContent: UPDATE_DATA_TEXT_CONTENT,
    isShowFieldsRules: false,
    onSubmit: setNewUserData,
    submitButtonText: "Update info",
  };

  return (
    <div className={`userSettings ${isHide ? "hideBlock" : ""}`}>
      <AuthForm formContent={updateDataFormContent} />
    </div>
  );
};

UserSettings.propTypes = {
  isActive: PropTypes.bool,
};
