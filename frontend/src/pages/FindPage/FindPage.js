import React, { useState, useEffect, useMemo } from "react";
import Find from "../../components/Find/Find";
// import FindHeader from "../components/Find/FindHeader";
// import FindBody from "../components/Find/FindBody"
import "./findStyle.css";

const FindPage = ( {users, currentUserSet} ) => {
  
  return (
    <div className="FindPage-root">
      {/* {selectedUser["username"]} */}
      {/* <FindHeader selectedUser={selectedUser} />
      <FindBody users={users} handleSelect={handleSelect}/> */}


      <Find currentUserSet={currentUserSet} users={users}/>
    </div>
  );
};

export default FindPage;
