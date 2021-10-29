import { Link } from "react-router-dom";
import "./style.css";
import { AiFillBell } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Divider } from "@mui/material";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
function Navbar({ auth }) {
  
  return (
    <>
      <div className="nav">
        <div className="navMenu">
          <NavItem to="/" linkClass="link"  item={<h3 className="logo">Logo</h3>}/>
          <div className="linkMenu">
            <NavItem to="find" linkClass="link" item="Find"/>
            
            <NavItem to="review" linkClass="link" item="Reviews"/>
            <NavItem to="about" linkClass="link" item="About"/>
          </div>
        </div>
        {!auth ? (
          <div className="navButton">
            <NavItem to="#" linkClass="link iconButton" item={<AiFillBell className="bellIcon"/>  }/>
            <NavItem to="#" profileDiv="profileDiv" linkClass="link iconButton" item={<CgProfile className="profileIcon"/>}>  
              {/* dropdown */}
              <ProfileMenu/>
            
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
