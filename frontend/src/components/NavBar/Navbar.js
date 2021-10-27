import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AiFillBell } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

function Navbar({ auth }) {
  return (
    <>
      <div className="nav">
        <div className="navMenu">
          <Link className="link" to="/">
            <h3>Logo</h3>
          </Link>
          <div className="linkMenu">
            <Link className="link" to="find">
              Find
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
						<AiFillBell className="bellIcon"/>
						<CgProfile className="profileIcon"/>
					</div>
        ) : (
          <div className="navButton">
            <Link className="link" to="signup">
              Sign up
            </Link>
            <Link className="link login" to="login">
              Login
            </Link>
          </div>
        )}
      </div>
      {/* <hr className="line"/> */}
    </>
  );
}

export default Navbar;
