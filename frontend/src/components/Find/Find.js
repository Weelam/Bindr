import React from "react";
import Grid from "@mui/material/Grid";
import FindItem from "./FindItem";

const Find = ({ users }) => {
  return (
    <div>
      <Grid container columns={5}  rowSpacing={2} columnSpacing={2}>
        {users.map((item, index) => {
          return (
            <Grid item xs={1} key={index}>
              <FindItem user={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Find;
