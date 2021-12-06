import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFillGearFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { Divider } from "@mui/material";

const ProfileMenu = ({ handleLogout }) => {
  return (
    <div className="profileMenu">
      <ProfileMenuItem to="/profile" leftIcon={<CgProfile />}>
        {" "}
        Profile{" "}
      </ProfileMenuItem>
      <ProfileMenuItem to="/" leftIcon={<MdDashboard />}>
        Dashboard
      </ProfileMenuItem>
      {/* <ProfileMenuItem to="#" leftIcon={<BsFillGearFill/>}>
        Settings
      </ProfileMenuItem> */}
      <Divider />
      <ProfileMenuItem
        handleLogout={handleLogout}
        leftIcon={<BiLogOutCircle />}
        to="/"
      >
        Logout
      </ProfileMenuItem>
    </div>
  );
};

const ProfileMenuItem = ({ children, to, leftIcon, handleLogout }) => {
  return (
    <Link
      onClick={handleLogout && handleLogout}
      to={to}
      className="profileItem"
    >
      <span className="leftIcon"> {leftIcon} </span>
      <span>{children}</span>
    </Link>
  );
};

export default ProfileMenu;
