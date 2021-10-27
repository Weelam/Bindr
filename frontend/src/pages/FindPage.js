import React, { useState, useEffect } from "react";
import FindHeader from "../components/Find/FindHeader";

const users = [
  {
    "profileImg": "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    "username": "Joseph",
    "courses": ["CSC309", "CSC373"],
    "bio": "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis."
  },
  {
    "profileImg": "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    "username": "Giorno Giovana",
    "courses": ["CSC123"],
    "bio": "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis."
  },
  {
    "profileImg": "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    "username": "Jotaro",
    "courses": ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
    "bio": "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis."
  },
  {
    "profileImg": "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    "username": "Josuke",
    "courses": ["CSC309", "CSC373"],
    "bio": "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis."
  }
]

const FindPage = () => {
  // const [selectedUser, setSelectedUser] = userState({});

  return (
    <div>
      <FindHeader/>
    </div>
  );
};

export default FindPage;
