import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../../actions/user";
import { defaultModel } from "../../actions/defaultModel";
import "./profilePageStyles.css";
import { Button } from "@mui/material";

const ProfilePage = ({ currentUser, setCurrentUser }) => {
  const [currentUserObj, setCurrentUserObj] = useState(defaultModel);

  useEffect(() => {
    getUser(currentUser, setCurrentUserObj);
  }, [currentUser]);

  const handleUsername = (e) => {
    e.preventDefault();
    setCurrentUserObj((prev) => {
      return { ...prev, username: e.target.value };
    });
  };

  const handleOther = (e, attribute) => {
    e.preventDefault();
    let value = e.target.value;
    if (attribute === "year") {
      value = parseInt(value);
    }
    setCurrentUserObj((prev) => {
      return {
        ...prev,
        profile: {
          ...prev["profile"],
          [attribute]: value,
        },
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await updateUser(currentUser, currentUserObj);
    setCurrentUser(newUser["username"]);
  };

  console.log(typeof currentUserObj["profile"]["year"]);
  return (
    <div className="profilePage-root">
      <div className="profilePage-header">
        <div className="profilePage-imageContainer">
          <img src={currentUserObj["profile"]["profileImg"]} />
        </div>

        <h1>{currentUserObj["username"]}</h1>
      </div>
      <form className="profilePage-form">
        <div className="profilePage-inner-div">
          <h5>Username</h5>
          <input
            value={currentUserObj["username"]}
            onChange={handleUsername}
            type="text"
          />
        </div>

        <div className="profilePage-inner-div">
          <h5>Program</h5>
          <input
            value={currentUserObj["profile"]["program"]}
            onChange={(e) => handleOther(e, "program")}
            type="text"
          />
        </div>
        <div className="profilePage-inner-div">
          <h5>Year</h5>
          <select
            value={currentUserObj["profile"]["year"]}
            onChange={(e) => handleOther(e, "year")}
          >
            <option type="number">{1}</option>
            <option type="number">{2}</option>
            <option type="number">{3}</option>
            <option type="number">{4}</option>
          </select>
        </div>
        <div className="profilePage-inner-div">
          <h5>Courses</h5>
          {currentUserObj["profile"]["courses"].map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
        <div className="profilePage-inner-div">
          <h5>Bio</h5>
          <textarea
            rows="4"
            cols="50"
            value={currentUserObj["profile"]["bio"]}
            onChange={(e) => handleOther(e, "bio")}
            type="text"
            maxLength="150"
          />
        </div>
        <div className="profilePage-submit">
          <div></div>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
