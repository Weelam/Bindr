import React from "react";
import Member from "./Member";

const Members = ({ members }) => {
  console.log(members);
  return (
    <div className="members-root">
      {members.map((member, index) => {
        return (
          <div className="members-memberContainer">
            <Member member={member} />
          </div>
        );
      })}
    </div>
  );
};

export default Members;
