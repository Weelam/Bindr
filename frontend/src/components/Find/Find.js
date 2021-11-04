import React, { useState, useEffect, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import FindItem from "./FindItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FindModal from "./FindModal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CancelIcon from "@mui/icons-material/Cancel";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const Find = ({ users, currentUserSet }) => {
  const { currentUser, setCurrentUser } = currentUserSet;

  const obs = useRef();
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [displayPointer, setDisplayPointer] = useState({ start: 0, end: 1 });
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [openAlert, setOpenAlert] = useState(false);
  const [acceptedSignal, setAcceptedSignal] = useState(null);

  useEffect(() => {
    setLoading(true);
    handleDisplayedUsers();
  }, [displayPointer]);

  const handleDisplayedUsers = () => {
    setDisplayedUsers((prev) => {
      return [
        ...prev,
        ...users.slice(displayPointer["start"], displayPointer["end"]),
      ];
    });
  };

  const lastUserRef = useCallback((node) => {
    if (obs.current) {
      obs.current.disconnect();
    }
    obs.current = new IntersectionObserver((x) => {
      if (x[0].isIntersecting) {
        console.log("at bottom");
        setDisplayPointer((prev) => {
          return { start: prev["end"], end: prev["end"] + 10 };
        });
        setLoading(false);
      }
    });
    if (node) obs.current.observe(node);
  }, []);

  const handleModal = (index) => {
    setSelectedUser(displayedUsers[index]);
    setOpenModal(true);
  };

  const handleRejectAccept = (accepted, chosenUser) => {
    const otherUserID = chosenUser["userID"];
    console.log(accepted, otherUserID);
    if (accepted) {
      // user accepted
      if (currentUser["rejected"].includes(otherUserID)) {
        setCurrentUser((prev) => ({
          ...prev,
          rejected: prev["rejected"].filter((user) => user !== otherUserID),
        }));
      }
      setCurrentUser((prev) => ({
        ...prev,
        wantToMatch: [...prev["wantToMatch"], otherUserID],
      }));
      setOpenAlert(true);
      setAcceptedSignal(true);
    } else {
      // user rejected
      if (currentUser["wantToMatch"].includes(otherUserID)) {
        setCurrentUser((prev) => ({
          ...prev,
          wantToMatch: prev["wantToMatch"].filter(
            (user) => user !== otherUserID
          ),
        }));
      }
      setCurrentUser((prev) => ({
        ...prev,
        rejected: [...prev["rejected"], otherUserID],
      }));
      setOpenAlert(true);
      setAcceptedSignal(false);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          iconMapping={{
            error: <CancelIcon fontSize="inherit" />,
          }}
          onClose={handleCloseAlert}
          severity={acceptedSignal ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {acceptedSignal ? "Match Sent" : "Match Rejected"}
        </Alert>
      </Snackbar>
      <Grid
        container
        columns={{ xs: 5, md: 8 }}
        rowSpacing={1}
        columnSpacing={1}
      >
        {displayedUsers.map((item, index) => {
          const wantToMatch = currentUser["wantToMatch"];
          const rejected = currentUser["rejected"];

          // if this user is has already been selected as a desired match
          if (wantToMatch.includes(item["userID"])) {
            console.log(rejected, item["userID"]);
            return (
              <Grid
                onClick={() => {
                  handleModal(index);
                }}
                ref={lastUserRef}
                item
                xs={1}
                key={index}
              >
                <div className="itemContainer-accepted">
                  <FindItem user={item} opacity={true} />
                </div>
              </Grid>
            );
          }

          // if this user is someone they don't wanna match with
          if (rejected.includes(item["userID"])) {
            return (
              <Grid
                onClick={() => {
                  handleModal(index);
                }}
                ref={lastUserRef}
                item
                xs={1}
                key={index}
              >
                <div className="itemContainer-rejected">
                  <FindItem user={item} opacity={true} />
                </div>
              </Grid>
            );
          }

          // the last grid item (for infinite scrolling)
          if (index === displayedUsers.length - 1) {
            return (
              <Grid
                onClick={() => {
                  handleModal(index);
                }}
                ref={lastUserRef}
                item
                xs={1}
                key={index}
              >
                <FindItem user={item} opacity={false} />
              </Grid>
            );
          }

          // untouched users
          return (
            <Grid
              onClick={() => {
                handleModal(index);
              }}
              item
              xs={1}
              key={index}
            >
              <FindItem user={item} opacity={false} />
            </Grid>
          );
        })}
        {/* {loading && <Grid item xs={1}><CircularProgress style={{ height: "45px" }} /></Grid>} */}
      </Grid>
      {openModal && (
        <FindModal
          handleRejectAccept={handleRejectAccept}
          openModal={openModal}
          setOpenModal={setOpenModal}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default Find;
