import React from "react";
import Chat from "../../components/Chat/Chat";

const AdminMessages = ({users, currentUser}) => {
  // unfinished - still need to consider how to switch between users
  return (
    <>
    
      <Chat users={users} currentUser={currentUser}/>
    </>
  );
};

export default AdminMessages;
