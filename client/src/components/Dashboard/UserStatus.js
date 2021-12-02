import React from 'react'
import './UserCardStyle.css'
import { FaBook, FaRegListAlt } from "react-icons/fa";
const user = {
    userID: 0,
    profileImg: "https://i.insider.com/59ca65fefca6e427008b4776?width=700",
    firstName: "Joseph",
    username: "user",
    groups: [0, 1],
    friends: [],
    wantToMatch: [],
    rejected: [],
    courses: ["CSC309", "CSC373"],
    program: "Gender Studies",
    year: "1st",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
  }
const UserStatus = () => {
    let courseString = user.courses.toString();
    if (courseString.length > 20) {
        courseString = courseString.substring(0, 20);
        courseString = courseString + '...';
    }
    return (
        <div id="userStatusContainer">
            <div id="userStatus">
                <h4 id="userName">{user.firstName}</h4>
                <p id="iconContainer">
                    <img id="iconImage" src={user.profileImg} alt=""/>
                </p>
                <hr>
                </hr>

                <p><FaBook /> {user.program} - {user.year} year </p>
                <p><FaRegListAlt /> {courseString}</p>

                <div id="userEmail">

                </div>

                <div id="userInfo">

                </div>
            </div>
        </div>
    )
}

export default UserStatus
