import React from 'react'
import { Link } from "react-router-dom";
import NavItem from './NavItem';
const ProfileMenu = () => {
    return (
        <div className="profileMenu">
            <ProfileMenuItem> Profile </ProfileMenuItem>
            <ProfileMenuItem leftIcon="">
                <NavItem to="dashboard" linkClass="link" item="Dashboard"/>
            </ProfileMenuItem>
        </div>
    )
}

const ProfileMenuItem = ( {children, leftIcon} ) => {
    return (
        <Link to="#" className="profileItem"> 
            <span> {leftIcon} </span>
            {children}
        </Link>
    )
}

export default ProfileMenu
