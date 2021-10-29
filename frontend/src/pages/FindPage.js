import React, { useState, useEffect, useMemo } from "react";
import FindHeader from "../components/Find/FindHeader";
import FindBody from "../components/Find/FindBody"
import "./findStyle.css";

const users = [
  {
    profileImg:
      "https://i.insider.com/59ca65fefca6e427008b4776?width=700",
    username: "Joseph",
    courses: ["CSC309", "CSC373"],
    program: "Political Science",
    year: "First",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
  {
    profileImg:
      "https://i.insider.com/59ca65fefca6e427008b4776?width=700",
    username: "Joseph",
    courses: ["CSC309", "CSC373"],
    program: "Political Science",
    year: "First",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
  {
    profileImg:
      "https://i1.sndcdn.com/artworks-000631908307-olxc4k-t500x500.jpg",
    username: "Giorno Giovana",
    courses: ["CSC123"],
    program: "Cinema Studies",
    year: "Second",
    bio: "Mollit cupidatat ipsum pariatur laborum. Non cillum dolore non commodo do anim velit laboris labore duis ut dolore nisi. Commodo velit mollit non ex ad consequat est tempor. Eiusmod ad nostrud consectetur aliquip veniam. Occaecat sint tempor minim sit do velit dolore excepteur non eiusmod eu. Officia qui Lorem dolore dolore ipsum esse incididunt et tempor amet est in cillum nulla.",
  },
  {
    profileImg:
      "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
    username: "Jotaro",
    courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
    program: "Hamburger Flipping",
    year: "Third",
    bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
  },
  {
    profileImg:
      "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    username: "Josuke",
    courses: ["CSC309", "CSC373"],
    program: "Gender Studies",
    year: "Fourth",
    bio: "Eipsoafkemon pokemon peokmon pokemon pokemon pokemon pokemon pokemon pokemon pokemon pokemon pokemon rum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  },
];

const FindPage = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleSelect = (index) => {
    console.log(index);
    setSelectedUser(users[index]);
  };
  return (
    <div className="FindPage-root">
      {/* {selectedUser["username"]} */}
      <FindHeader selectedUser={selectedUser} />
      <FindBody users={users} handleSelect={handleSelect}/>

    </div>
  );
};

export default FindPage;
