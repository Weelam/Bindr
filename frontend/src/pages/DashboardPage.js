import React, {useState, useEffect} from 'react'
import ProjectList from '../components/Dashboard/ProjectList';
import Board from '../components/Dashboard/Board';
import UserStatus from '../components/Dashboard/UserStatus';
const user = {
    profileImg:
      "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
    username: "Howard",
    courses: ["CSC309", "CSC373", "CSC369"],
    program: "Computer Science",
    year: "Third",
    bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipi"
    
}

const DashboardPage = () => {
    return (
        <div>
            <ProjectList />
            <UserStatus />
            
        </div>
    )
}
export default DashboardPage;