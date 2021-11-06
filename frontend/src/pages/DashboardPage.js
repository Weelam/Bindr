import React, { useState, useEffect, useReducer } from 'react'
import ProjectList from '../components/Dashboard/ProjectList';
import Board from '../components/Dashboard/Board';
import UserStatus from '../components/Dashboard/UserStatus';
import Chat from '../components/Chat/Chat';
import "./Dashboard.css"
// const user = {
//     profileImg:
//       "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
//     username: "Howard",
//     courses: ["CSC309", "CSC373", "CSC369"],
//     program: "Computer Science",
//     year: "Third",
//     bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipi"

// }

const DashboardPage = (props) => {

    const [currentUser, setCurrentUser] = useState(props.currentUser);
    const [ projects, setProjects] = useState(props.groups);
    const [curProjectind, setInd] = useState(0);

    const updateDisplayingProject = (id) =>{
        setInd(parseInt(id));
    }
    const handleUpdate = (id, group) => {
        props.updateGroup(id, group);
        let copy = [...projects];
       

        copy[parseInt(id)] = group;


        setProjects(copy);
    }

    useEffect(()=>{
        setProjects(props.groups);
    },[props.groups])

    return (
        <div id="dashPage">
        <div id="row">
        <div id="leftColumn">
            {/* <Button>Groups</Button> */}
            <UserStatus currentUser={props.currentUser} />
            <ProjectList currentUser={props.currentUser} groups={props.groups} updateUser={props.updateUser} updateGroup={handleUpdate} updateDisplayingProject = {updateDisplayingProject}/>
        </div>
        <div id="middleColumn">
            <Chat id="chatbox" currentUser={props.currentUser} users={props.users} />
        </div>

        <div id="rightColumn">
            <div id="board"><Board project={projects[curProjectind]} updateGroup={handleUpdate}/></div>
        </div>
        </div>
        </div>
    )
}
export default DashboardPage;