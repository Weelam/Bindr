import React from "react";
import "./style.css";
import { AiFillCheckCircle } from 'react-icons/ai';

function FindHeader({ img, user }) {

	const handleMatch = () => {
		alert("match sent")
	}
  return (
    <>
      <div className="header">
        <div className="bigProfilePicContainer">
          <img
            className="bigProfilePic"
            src="https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png"
          />
        </div>
        <div className="nameCourses">
          <h3 className="name">Joseph</h3>
          <p className="courses">CSC309, CSC373</p>
        </div>
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!
          </p>
        </div>
        <button onClick={handleMatch} className="match"><AiFillCheckCircle className="matchIcon"/></button>
      </div>
      <div className="lines">
        <hr className="line1" />
        <hr className="line2" />
      </div>
    </>
  );
}

export default FindHeader;
