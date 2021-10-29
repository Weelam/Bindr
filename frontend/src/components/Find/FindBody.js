import React from "react";
import FindFilter from "./FindFilter";
import FindTable from "./FindTable";
import "./bodyStyle.css";

function FindBody({ users, handleSelect }) {
  return (
    <div className="FindBody-root">
      <FindFilter />
      <FindTable users={users} handleSelect={handleSelect} />
    </div>
  );
}

export default FindBody;
