import "./modal.scss";
import PropTypes from "prop-types";
import { CloseIcon } from "../../assets/icons/index.js";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modalWindow">
        <CloseIcon className="closeIcon" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element,
};
