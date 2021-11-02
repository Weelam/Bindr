import React from "react";
import "./itemStyle.css";
const FindItem = ({ user }) => {
  return (
    <div className="itemContainer">
      <div className="profileImgContainer">
        <img className="profileImg" src={user["profileImg"]} />
      </div>
      <div className="itemFooter">
        <div>
          <h3>{user["username"]}</h3>
          <span> {user["year"]}</span>
        </div>
        <p>{user["program"]}</p>
        <div className="itemCourses">
          {user["courses"].map((item, index) => {
            return (
              <span key={index}>{item}</span>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FindItem;
