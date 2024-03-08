import { useEffect, useState } from "react";
import { POPUP_ANIMATION_DURATION } from "@/constants/durations.js";

export const UseDelayedUnmount = (isActiveComponent, delayedFunc) => {
  const [timerId, setTimerId] = useState(null);
  const [isHide, setIsHide] = useState(false);
  const onCLoseComponent = () => {
    setIsHide(true);

    const newTimerId = setTimeout(() => {
      delayedFunc?.();
      setIsHide(null);
    }, POPUP_ANIMATION_DURATION);
    setTimerId(newTimerId);
  };

  useEffect(() => {
    if (timerId) {
      setIsHide(false);
      clearTimeout(timerId);
    }

    if (!isActiveComponent) onCLoseComponent();
  }, [isActiveComponent]);

  return { isHide };
};
