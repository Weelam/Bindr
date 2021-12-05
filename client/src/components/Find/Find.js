import React, { useState, useEffect, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import FindItem from "./FindItem";
import FindModal from "./FindModal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CancelIcon from "@mui/icons-material/Cancel";
import FindFilter from "./FindFilter";
import Divider from "@mui/material/Divider";
import "./styles/itemStyle.css";
import {
  getAllUsers,
  getUser,
  updateUser,
  sendNotification,
} from "../../actions/user";
import { defaultModel } from "../../actions/defaultModel";
// taken from material UI snack bar example
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});
// end

const Find = ({ currentUser }) => {
  const obs = useRef();
  const [users, setUsers] = useState([]);
  const [currentUserObj, setCurrentUserObj] = useState(defaultModel);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [displayPointer, setDisplayPointer] = useState({ start: 0, end: 4 });
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [openAlert, setOpenAlert] = useState(false);
  const [acceptedSignal, setAcceptedSignal] = useState(null);
  const [filter, setfilter] = useState({
    courses: [],
    programs: [],
    years: [],
  });
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUser(currentUser, setCurrentUserObj);
    getAllUsers(setUsers);
  }, [currentUser]);

  useEffect(() => {
    handleDisplayedUsers();
  }, [displayPointer, users]);

  const handleDisplayedUsers = () => {
    setDisplayedUsers((prev) => {
      let otherUsers = users.filter((otherUser) => {
        return otherUser._id !== currentUserObj._id;
      });
      console.log(otherUsers);
      return [
        ...prev,
        ...otherUsers.slice(displayPointer["start"], displayPointer["end"]),
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
          return { start: prev["end"], end: prev["end"] + 8 };
        });
      }
    });
    if (node) obs.current.observe(node);
  }, []);

  const handleModal = (index) => {
    setSelectedUser(filteredUsers[index]);
    setOpenModal(true);
  };

  const sendMatch = (recipientID) => {
    const notification = {
      senderID: currentUserObj["_id"],
      recipientID: recipientID,
      content: `${currentUser} wants to match with you!`,
    };
    sendNotification(notification);
  };

  useEffect(() => {
    // wantToMatch and rejected are being updated
    // call updateUser
    if (currentUserObj !== defaultModel) {
      updateUser(currentUser, currentUserObj);
    }
  }, [currentUser, currentUserObj]);

  const handleRejectAccept = (accepted, chosenUser) => {
    const otherID = chosenUser["_id"];
    if (accepted) {
      if (currentUserObj["profile"]["wantToMatch"].includes(otherID)) {
        return;
      }
      // modify the userobj here...
      // user accepted
      // remove user from rejected array, and add them to wantToMatch array
      if (currentUserObj["profile"]["rejected"].includes(otherID)) {
        setCurrentUserObj((prev) => ({
          ...prev,
          profile: {
            ...prev["profile"],
            rejected: prev["profile"]["rejected"].filter(
              (user) => user !== otherID
            ),
          },
        }));
      }
      // add user to wantToMatch array
      setCurrentUserObj((prev) => ({
        ...prev,
        profile: {
          ...prev["profile"],
          wantToMatch: [...prev["profile"]["wantToMatch"], otherID],
        },
      }));
      setOpenAlert(true);
      setAcceptedSignal(true);
      sendMatch(otherID);
    } else {
      // user rejected
      if (currentUserObj["profile"]["rejected"].includes(otherID)) {
        return;
      }
      if (currentUserObj["profile"]["wantToMatch"].includes(otherID)) {
        setCurrentUserObj((prev) => ({
          ...prev,
          profile: {
            ...prev["profile"],
            wantToMatch: prev["profile"]["wantToMatch"].filter(
              (user) => user !== otherID
            ),
          },
        }));
      }
      setCurrentUserObj((prev) => ({
        ...prev,
        profile: {
          ...prev["profile"],
          rejected: [...prev["profile"]["rejected"], otherID],
        },
      }));
      setOpenAlert(true);
      setAcceptedSignal(false);
    }
    // send a put request here...
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const filterUsers = (displayedUsers) => {
    if (currentUserObj) {
      return displayedUsers.filter((x) => {
        let isCourses = x["profile"]["courses"].some((course) =>
          filter["courses"].includes(course)
        );
        let isProgram = filter["programs"].includes(x["profile"]["program"]);
        let isYear = filter["years"].includes(x["profile"]["year"]);
        let isFriends = currentUserObj["profile"]["friends"].includes(
          x["_id"]
        );
        if (isFriends) {
          console.log("isFriends", x["profile"]);
        }
        if (filter["years"].length === 0) {
          isYear = true;
        }
        if (filter["programs"].length === 0) {
          isProgram = true;
        }
        if (filter["courses"].length === 0) {
          isCourses = true;
        }
        return isCourses && isYear && isProgram && !isFriends;
      });
    }
  };

  useEffect(() => {
    if (currentUserObj) {
      setFilteredUsers(filterUsers(displayedUsers));
    }
  }, [filter, users, displayedUsers, currentUserObj]);

  return (
    <div id="findRoot" style={{ display: "flex" }}>
      <FindFilter filter={filter} setfilter={setfilter} />

      <Divider orientation="vertical" flexItem style={{ margin: "0 1.5rem" }} />

      {/* -- taken from material UI snackbar example --*/}
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
      {/* -- end -- */}
      <Grid
        container
        columns={{ xs: 5, md: 8 }}
        rowSpacing={1}
        columnSpacing={1}
      >
        {currentUserObj ? (
          filteredUsers.map((item, index) => {
            const wantToMatch = currentUserObj["profile"]["wantToMatch"];
            const rejected = currentUserObj["profile"]["rejected"];
            let lastItem = index === filteredUsers.length - 1;
            // console.log(filteredUsers);

            if (wantToMatch.includes(item["_id"])) {
              // if this user is has already been selected as a desired match
              return (
                <Grid
                  onClick={() => {
                    handleModal(index);
                  }}
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
            if (rejected.includes(item["_id"])) {
              return (
                <Grid
                  onClick={() => {
                    handleModal(index);
                  }}
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

            if (lastItem) {
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
            else {
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
            }
          })
        ) : (
          <h1>loading resources...</h1>
        )}
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
