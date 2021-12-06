import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { defaultModel } from "../../actions/defaultModel";
import { getUserByID } from "../../actions/user";
import "./styles/friendStyle.css";

const Friend = ({ friend, rightSide }) => {
  const [user, setUser] = useState(defaultModel);

  useEffect(() => {
    getUserByID(friend, setUser);
  }, []);

  return (
    <div className="friend-root">
      <Button className="friend-itemContainer">
				<div className="friend-profileImgContainer">
					<img src={user["profile"]["profileImg"]} />
				</div>
        <h4>{user["username"]}</h4>

      </Button>
    </div>
  );
};

export default Friend;
