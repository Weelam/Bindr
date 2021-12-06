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
      <div className="friend-itemContainer">
				<div className="friend-profileImgContainer">
					<img src={user["profile"]["profileImg"]} />
				</div>
        <p>{user["username"]}</p>

      </div>
    </div>
  );
};

export default Friend;
