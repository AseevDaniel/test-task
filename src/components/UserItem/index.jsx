import "./user-item.scss";
import { LogoutIcon, SettingsIcon } from "@/assets/icons";
import PropTypes from "prop-types";
import { UserSettings } from "./components/UserSettings/index.jsx";
import { useState } from "react";
import { usePageState } from "../../store/PageStateProvider.jsx";
export const UserItem = ({ user }) => {
  const [isUserSettingsActive, setIsUserSettingsActive] = useState(true);
  const { callActionStatusPopup } = usePageState();

  if (!user) return null;

  return (
    <div className="userItem">
      <div className="userField">
        <SettingsIcon
          onClick={() => callActionStatusPopup()}
          title="User Settings"
          className="userField--icon settingsIcon"
        />
        <span>{user?.email}</span>
        <LogoutIcon className="userField--icon logoutIcon" />
      </div>
      {isUserSettingsActive && <UserSettings className="lol" />}
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};
