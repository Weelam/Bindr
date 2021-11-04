import React, { useState, useEffect, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import FindItem from "./FindItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FindModal from "./FindModal";

const Find = ({ users, currentUserSet }) => {
  const { currentUser, setCurrentUser } = currentUserSet;

  const obs = useRef();
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [displayPointer, setDisplayPointer] = useState({ start: 0, end: 1 });
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    setLoading(true);
    handleDisplayedUsers();
    console.log(displayPointer["start"], displayPointer["end"]);
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
      console.log("Match sent to: ", otherUserID);
      setCurrentUser((prev) => ({
        ...prev,
        wantToMatch: [...prev["wantToMatch"], otherUserID],
      }));
    } else {
      // user rejected
      setCurrentUser((prev) => ({
        ...prev,
        rejected: [...prev["rejected"], otherUserID],
      }));
    }
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div>
      <Grid
        container
        columns={{ xs: 5, md: 8 }}
        rowSpacing={1}
        columnSpacing={1}
      >
        {displayedUsers.map((item, index) => {
          const wantToMatch = currentUser["wantToMatch"];
          const rejected = currentUser["rejected"];

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
