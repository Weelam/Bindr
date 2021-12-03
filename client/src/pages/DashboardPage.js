import React, { useState, useEffect } from "react";
import ProjectList from "../components/Dashboard/ProjectList";
import FriendList from "../components/Dashboard/FriendList"
import Board from "../components/Dashboard/Board";
import UserStatus from "../components/Dashboard/UserStatus";
import Chat from "../components/Chat/Chat";
import "./Dashboard.css";
// const user = {
//     profileImg:
//       "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
//     username: "Howard",
//     courses: ["CSC309", "CSC373", "CSC369"],
//     program: "Computer Science",
//     year: "Third",
//     bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipi"

// }

const DashboardPage = ({ currentUser, users, groups }) => {
  const [projects, setProjects] = useState(groups);
  const [allGroups, setGroups] = useState(groups);
  const [allUsers, setUsers] = useState(users);
  const [curProjectind, setInd] = useState(0);
  const [curFriendInd, setFriendInd] = useState(0);
  const [isProject, setIsProject] = useState(true);

  const switchToProjects = ()=>{
    setIsProject(true);
  }

  const switchToFriends = () => {
    setIsProject(false);
  }

  function updateUser(id, user) {
    let copy = [...allUsers];
    copy[parseInt(id) - 1] = user;
    setUsers(copy);
  }

  useEffect(() => {
    setProjects(
      groups.filter((proj) => {
        return currentUser.groups.includes(parseInt(proj.groupID));
      })
    );
  }, [currentUser]);

  function updateGroup(id, group) {
    let copy = [...allGroups];
    console.log(copy[id].list.length);

    copy[parseInt(id)] = group;

    console.log(copy[id].list.length);

    setGroups(copy);
    setProjects(
      copy.filter((proj) => {
        return currentUser.groups.includes(proj.groupID);
      })
    );
    console.log("updated group~");
  }

  const updateDisplayingProject = (id) => {
    setInd(parseInt(id));
  };
  const updateDisplayingFriend = (id) => {
    setFriendInd(parseInt(id));
  };

  const handleUpdate = (id, group) => {
    updateGroup(id, group);
    let copy = [...projects];

    copy[parseInt(id)] = group;
    console.log("handleUpdate");

    setProjects(copy);
  };

  useEffect(() => {
    setProjects(groups);
    console.log("useEffect-setprojects");
  }, [groups]);

  console.log(projects);
  return (
    <div id="dashPage">
      <div id="row">
        <div id="leftColumn">
          {/* <Button>Groups</Button> */}
          <UserStatus currentUser={currentUser} />
          <button className="choicebutton" onClick={switchToProjects}>
            <span className="projectlisttitle">
              Projects
            </span>
          </button>

          <button className="choicebutton" onClick={switchToFriends}>
            <span className="friendlisttitle">
              Friends
            </span>
          </button>
          {isProject
          ?<ProjectList
          currentUser={currentUser}
          groups={groups}
          updateUser={updateUser}
          updateGroup={handleUpdate}
          updateDisplayingProject={updateDisplayingProject}
          curProject={curProjectind}
        />
          :<FriendList
          currentUser={currentUser}
          users={users}
          updateUser={updateUser}
          updateGroup={handleUpdate}
          updateDisplayingFriend={updateDisplayingFriend}
          curFriend={curFriendInd}
        />}
          
        </div>

        <div id="middleColumn">
        {isProject
          ?<div id="board">
          <Board
            project={projects[curProjectind]}
            updateGroup={handleUpdate}
          />
        </div>
          :<Chat id="chatbox" currentUser={currentUser} users={users} />}
        </div>

        <div id="rightColumn">
          
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;