import { usePageState } from "../../store/PageStateProvider.jsx";
import { useEffect, useState } from "react";
import "./action-popup.scss";
import { UseDelayedUnmount } from "../../hooks/useDelayedUnmount.jsx";

export const ActionPopup = () => {
  const { currentActionStatus } = usePageState();
  const [actionStatus, setActionStatus] = useState(currentActionStatus);

  const { isHide } = UseDelayedUnmount(!!currentActionStatus, () =>
    setActionStatus(null),
  );

  useEffect(() => {
    if (currentActionStatus) setActionStatus(currentActionStatus);
  }, [currentActionStatus]);

  if (!actionStatus) return null;

  return (
    <div
      className={`actionPopup ${actionStatus?.isSuccess ? "" : "failure"} ${isHide ? "hidePopup" : ""}`}
    >
      <p className="message">{actionStatus?.message || "no message"}</p>
    </div>
  );
};
