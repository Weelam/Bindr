import React from "react";

const FindItem = ({ user, opacity }) => {
  const userProfile = user["profile"]

  return (
    <div className={opacity ? "itemContainer itemContainer-lowOpac" : "itemContainer"}>
      <div className="profileImgContainer">
        <img className="profileImg" src={userProfile["profileImg"]} alt="profile" />
      </div>
      <div className="itemFooter">
        <div>
          <h3>{userProfile["name"]}</h3>
          <span> {userProfile["year"]}</span>
        </div>
        <p>{userProfile["program"]}</p>
        <div className="itemCourses">
          {userProfile["courses"].map((item, index) => {
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
