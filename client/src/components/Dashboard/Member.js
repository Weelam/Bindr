import React, { useState, useEffect } from "react";
import { defaultModel } from "../../actions/defaultModel";
import { getUserByID } from "../../actions/user";
import "./styles/memberStyle.css";

const Member = ({ member }) => {
  const [user, setUser] = useState(defaultModel);

  useEffect(() => {
    getUserByID(member, setUser);
  }, []);

	console.log(user)

  return (
    <div className="member-root">
      <div className="member-itemContainer">
        <div className="member-profileImgContainer">
          <img src={user["profile"]["profileImg"]} />
        </div>
        <h4>{user["username"]}</h4>
      </div>
    </div>
  );
};

export default Member;
