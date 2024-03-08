import {
  POPUP_LIFE_TIME,
  usePageState,
} from "../../store/PageStateProvider.jsx";
import "./action-popup.scss";
import { useEffect, useState } from "react";

export const POPUP_ANIMATION_DURATION = 1000;
export const ActionPopup = () => {
  const [timerId, setTimerId] = useState(null);
  const { currentActionStatus } = usePageState();
  const [isHide, setIsHide] = useState(false);
  const [actionStatus, setActionStatus] = useState(currentActionStatus);

  const onCLosePopup = () => {
    setIsHide(true);

    const newTimerId = setTimeout(() => {
      setActionStatus(null);
      setIsHide(null);
    }, POPUP_ANIMATION_DURATION);
    setTimerId(newTimerId);
  };

  useEffect(() => {
    if (timerId) {
      setIsHide(false);
      clearTimeout(timerId);
    }

    currentActionStatus ? setActionStatus(currentActionStatus) : onCLosePopup();
  }, [currentActionStatus]);

  if (!actionStatus) return null;

  return (
    <div
      className={`actionPopup ${(actionStatus?.isSuccess ? "" : "failure", isHide ? "hidePopup" : "")}`}
    >
      <p className="message">{actionStatus?.message || "no message"}</p>
    </div>
  );
};
