import React from "react";
import "./headerStyle.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Divider from "@mui/material/Divider";

function FindHeader({ selectedUser }) {
  const handleMatch = () => {
    alert("match sent");
  };

  const parseCourses = (courses) => {
    let coursesParsed = "";
    courses.forEach((element, i) => {
      if (i !== courses.length - 1) {
        coursesParsed = coursesParsed + element + ", ";
      } else {
        coursesParsed = coursesParsed + element;
      }
    });
    return <p className="courses">{coursesParsed}</p>;
  };
  return (
    <>
      <div className="FindHeader-root">
        <div className="header">
          <div className="bigProfilePicContainer">
            <img className="bigProfilePic" src={selectedUser["profileImg"]} />
          </div>
          <div className="nameCourses">
            <h3 className="name">{selectedUser["username"]}</h3>
            {parseCourses(selectedUser["courses"])}
          </div>
          <div className="bio">{selectedUser["bio"]}</div>
          <div className="matchContainer">
            <button onClick={handleMatch} className="match">
              <AiFillCheckCircle className="matchIcon" />
            </button>
          </div>
        </div>
        <div className="lines">
          <Divider className="line1" />
          <Divider className="line2" />
        </div>
      </div>
    </>
  );
}

export default FindHeader;
