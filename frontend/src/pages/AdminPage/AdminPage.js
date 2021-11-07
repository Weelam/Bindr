import React from 'react'
import SideBar from '../../components/Admin/SideBar';

const AdminPage = ({currentUser, users}) => {
	return (
		<div className="AdminPage-root">
			<SideBar currentUser={currentUser} users={users}/>
		</div>
	)
}

export default AdminPage
