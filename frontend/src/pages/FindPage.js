import React, { useState, useEffect, useMemo } from "react";
import Find from "../components/Find/Find";
// import FindHeader from "../components/Find/FindHeader";
// import FindBody from "../components/Find/FindBody"
import "./findStyle.css";
import data from "../components/Find/users.json"
const users = data["data"]

const FindPage = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleSelect = (index) => {
    console.log(index);
    setSelectedUser(users[index]);
  };
  return (
    <div className="FindPage-root">
      {/* {selectedUser["username"]} */}
      {/* <FindHeader selectedUser={selectedUser} />
      <FindBody users={users} handleSelect={handleSelect}/> */}


      <Find users={users}/>
    </div>
  );
};

export default FindPage;
