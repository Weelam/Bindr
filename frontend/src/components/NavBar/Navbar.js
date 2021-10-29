import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AiFillBell } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Divider } from "@mui/material";

function Navbar({ auth }) {
  return (
    <>
      <div className="nav">
        <div className="navMenu">
          <Link className="link" to="/">
            <h3 className="logo">Logo</h3>
          </Link>
          <div className="linkMenu">
            <Link className="link" to="find">
              Find
            </Link>

            <Link className="link" to="dashboard">
              Dashboard
            </Link>


            <Link className="link" to="review">
              Reviews
            </Link>
            <Link className="link" to="about">
              About
            </Link>
          </div>
        </div>
        {auth ? (
          <div className="navButton">
            <Link className="iconButton"><AiFillBell className="bellIcon"/> </Link>
						
						<Link className="iconButton"><CgProfile className="profileIcon"/></Link>
					</div>
        ) : (
          <div className="navButton">
            <Link className="link iconButton" to="signup">
              Sign up
            </Link>
            <Link className="link login iconButton" to="login">
              Login
            </Link>
          </div>
        )}
      </div>
      {/* <Divider className="navBar-Divider"/> */}
    </>
  );
}

export default Navbar;
