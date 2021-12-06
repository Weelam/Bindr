import React, {useState, useEffect} from "react";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "../Find/styles/itemStyle.css";
import { getUserByID } from "../../actions/user";
import { defaultModel } from "../../actions/defaultModel";
const OtherUserModal = ({
  openModal,
  setOpenModal,
  userID,
}) => {

	const [userObj, setUserObj] = useState(defaultModel);

	useEffect(() => {
		getUserByID(userID, setUserObj)
	}, [])


	const handleClose = () => {
    setOpenModal(false);
  };

  const handleAccept = () => {
    // handleAcceptDecline(false, userObj);
    setOpenModal(false);
  };

  const handleReject = () => {
    // handleAcceptDecline(true, userObj);
    setOpenModal(false);
  };

	console.log(userObj)
  return (
    <div style={{ position: "relative" }}>
      <Modal open={openModal} onClose={handleClose} footer={"Footer"}>
        <div className="innerModalContainer">
          <div className="modalImageContainer">
            <img
              className="modalImage"
              src={userObj["profile"]["profileImg"]}
              alt="profile"
            />
          </div>
          <div className="modalDesc">
            <div className="modalDesc-nameyear">
              <h3>{userObj["profile"]["firstName"]}</h3>
              <span>{userObj["profile"]["year"]}</span>
            </div>
            <p className="modalProgram">{userObj["profile"]["program"]}</p>
            <div className="modalCourses">
              {userObj["profile"]["courses"].map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
            <Divider className="modalDivider" />
            <p className="modalBio"> {userObj["profile"]["bio"]} </p>
          </div>
          <div className="modalEmptySpace"></div>
        </div>
      </Modal>
      <div className="modalButtonsContainer">
        <div className="modalButtons">
          <button
            onClick={() => handleReject(false, userObj)}
            className="modalRejectButton"
          >
            <CancelIcon className="modalReject" />
          </button>
          <button
            onClick={() => handleAccept(true, userObj)}
            className="modalAcceptButton"
          >
            <CheckCircleIcon className="modalAccept" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherUserModal;
