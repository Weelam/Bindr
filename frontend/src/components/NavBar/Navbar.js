import { Link } from "react-router-dom";
import "./style.css";
import { AiFillBell } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
import Notifications from "./Notifications";

function Navbar({ auth, logout }) {
  
  return (
    <>
      <div className="nav">
        <div className="navMenu">
          <NavItem to="/" linkClass="link"  item={<h3 className="logo">Logo</h3>}/>
          <div className="linkMenu">
            <NavItem to="find" linkClass="link" item="Find"/>
          </div>
        </div>
        {auth ? (
          <div className="navButton">
            <NavItem to="#" outerDiv="notifDiv" linkClass="link iconButton" item={<AiFillBell className="bellIcon"/>}> 
              <Notifications/>
            </NavItem>
            <NavItem to="#" outerDiv="profileDiv" linkClass="link iconButton" item={<CgProfile className="profileIcon"/>}>  
              {/* dropdown */}
              <ProfileMenu logout={logout}/>
            
            </NavItem>
					</div>
        ) : (
          <div className="navButton">
            <NavItem to="signup" linkClass="link" item="Sign up"/>
            <NavItem to="login" linkClass="link login" item="Login"/>
          </div>
        )}
      </div>
      {/* <Divider className="navBar-Divider"/> */}
    </>
  );
}

export default Navbar;
