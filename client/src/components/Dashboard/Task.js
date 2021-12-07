import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Task = ({ task }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Accordion className="task-root">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p>Accordion 1</p>
      </AccordionSummary>
      <div className="task-checkbox">
        <input
          type="checkbox"
          onChange={() => setChecked((prev) => !prev)}
          value={checked}
        />
      </div>
      <div className="task-left">
        <p className="task-name">{task["name"]}</p>
      </div>
    </Accordion>
  );
};

export default Task;
