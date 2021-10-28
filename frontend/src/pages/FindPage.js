import React, { useState, useEffect, useMemo } from "react";
import FindHeader from "../components/Find/FindHeader";
import FindBody from "../components/Find/FindBody"

const users = [
  {
    profileImg:
      "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    username: "Joseph",
    courses: ["CSC309", "CSC373"],
    program: "Political Science",
    year: "First",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
  {
    profileImg:
      "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    username: "Giorno Giovana",
    courses: ["CSC123"],
    program: "Cinema Studies",
    year: "Second",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
  {
    profileImg:
      "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    username: "Jotaro",
    courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
    program: "Hamburger Flipping",
    year: "Third",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
  {
    profileImg:
      "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    username: "Josuke",
    courses: ["CSC309", "CSC373"],
    program: "Gender Studies",
    year: "Fourth",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
];

const FindPage = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleSelect = (index) => {
    console.log(index);
    setSelectedUser(users[index]);
  };
  return (
    <div>
      {/* {selectedUser["username"]} */}
      <FindHeader selectedUser={selectedUser} />
      <FindBody users={users} handleSelect={handleSelect}/>

    </div>
  );
};

export default FindPage;
