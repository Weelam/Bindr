import React, { useState, useEffect, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import FindItem from "./FindItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Find = ({ users }) => {
  const obs = useRef();
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [displayPointer, setDisplayPointer] = useState({ start: 0, end: 1 });
  const [loading, setLoading] = useState(true);

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
        console.log("visible");
        setDisplayPointer((prev) => {
          return { start: prev["end"], end: prev["end"] + 10 };
        });
        setLoading(false);
      }
    });
    if (node) obs.current.observe(node);
  }, []);

  return (
    <div>
      <Grid container columns={{xs:5, md: 8}} rowSpacing={2} columnSpacing={2}>
        {displayedUsers.map((item, index) => {
          if (index === displayedUsers.length - 1) {
            return (
              <Grid ref={lastUserRef} item xs={1} key={index}>
                <FindItem user={item} />
              </Grid>
            );
          }
          return (
            <Grid item xs={1} key={index}>
              <FindItem user={item} />
            </Grid>
          );
        })}
      </Grid>
      {loading && <CircularProgress style={{ height: "100%" }} />}
    </div>
  );
};

export default Find;
