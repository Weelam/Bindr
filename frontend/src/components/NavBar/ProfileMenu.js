import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItem from "./NavItem";
import { CgProfile } from 'react-icons/cg';
import {BsFillGearFill} from 'react-icons/bs';
import  {BiLogOutCircle} from "react-icons/bi";
import {MdDashboard} from "react-icons/md";
import { Divider } from "@mui/material";

const ProfileMenu = ({logout}) => {
  return (
    <div className="profileMenu">
      <ProfileMenuItem to="#" leftIcon={<CgProfile/>}> Profile </ProfileMenuItem>
      <Divider/>
      <ProfileMenuItem leftIcon="" to="/" leftIcon={<MdDashboard/>}>
        Dashboard
      </ProfileMenuItem>
      <ProfileMenuItem leftIcon="" to="#" leftIcon={<BsFillGearFill/>}>
        Settings
      </ProfileMenuItem>
      <Divider/>
      <ProfileMenuItem logout={logout} leftIcon="" to="#" leftIcon={<BiLogOutCircle/>}>
        Logout
      </ProfileMenuItem>
    </div>
  );
};

const ProfileMenuItem = ({ children, to, leftIcon, logout }) => {
  return (
    <Link onClick={ logout && logout} to={to} className="profileItem">
      <span className="leftIcon"> {leftIcon} </span>
      <span>{children}</span>
    </Link>
  );
};

export default ProfileMenu;
