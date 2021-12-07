import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./styles/groupStyle.css"

const Group = ({ group, handleSelectedGroup }) => {
  return (
    <div className="group-root">
      <Button onClick={() => handleSelectedGroup(group)} className="group-itemContainer">
        <h4>{group["projectName"]}</h4>
      </Button>
    </div>
  );
};

export default Group;
