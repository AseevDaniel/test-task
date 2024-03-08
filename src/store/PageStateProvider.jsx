import PropTypes from "prop-types";
import {
  actionSatusDefaultFaliure,
  actionSatusDefaultSuccess,
} from "../constants/textContent.js";
import { createContext, useContext, useState } from "react";

const PageStateContext = createContext();

export const POPUP_LIFE_TIME = 3000;

const PageStateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentActionStatus, setCurrentActionStatus] = useState(null);
  const isPopupShown = !!currentActionStatus;

  const callActionStatusPopup = (isSuccess = true, message = null) => {
    const defaultStatus = isSuccess
      ? actionSatusDefaultSuccess
      : actionSatusDefaultFaliure;

    setCurrentActionStatus({
      ...defaultStatus,
      message: message || defaultStatus.message,
    });

    setTimeout(() => {
      setCurrentActionStatus(null);
    }, POPUP_LIFE_TIME);
  };

  return (
    <PageStateContext.Provider
      value={{
        isLoading,
        setIsLoading,
        currentActionStatus,
        isPopupShown,
        callActionStatusPopup,
      }}
    >
      {children}
    </PageStateContext.Provider>
  );
};

export const usePageState = () => {
  return useContext(PageStateContext);
};

PageStateProvider.propTypes = {
  children: PropTypes.element,
};

export default PageStateProvider;
