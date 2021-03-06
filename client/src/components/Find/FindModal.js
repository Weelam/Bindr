import React from "react";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const FindModal = ({ openModal, setOpenModal, user, handleRejectAccept }) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleReject = () => {
    handleRejectAccept(false, user);
    setOpenModal(false);
  };

  const handleAccept = () => {
    handleRejectAccept(true, user);
    setOpenModal(false);
  };


  return (
    <div style={{ position: "relative" }}>
      <Modal open={openModal} onClose={handleClose} footer={"Footer"}>
        <div className="innerModalContainer">
          <div className="modalImageContainer">
            <img className="modalImage" src={user["profile"]["profileImg"]} alt="profile" />
          </div>
          <div className="modalDesc">
            <div className="modalDesc-nameyear">
              <h3>{user["username"]}</h3>
              <span>{user["profile"]["year"]}</span>
            </div>
            <p className="modalProgram">{user["profile"]["program"]}</p>
            <div className="modalCourses">
              {user["profile"]["courses"].map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
            <Divider className="modalDivider" />
            <p className="modalBio"> {user["profile"]["bio"]} </p>
          </div>
          <div className="modalEmptySpace"></div>
        </div>
      </Modal>
      <div className="modalButtonsContainer">
        <div className="modalButtons">
          <button onClick={() => handleReject(false, user)} className="modalRejectButton">
            <CancelIcon  className="modalReject" />
          </button>
          <button onClick={() => handleAccept(true, user)} className="modalAcceptButton">
            <CheckCircleIcon className="modalAccept" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindModal;
