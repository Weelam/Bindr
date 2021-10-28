import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./tableStyle.css";
const columns = [
  { id: "username", label: "Username", minWidth: 170 },
  { id: "courses", label: "Courses", minWidth: 100 },
  {
    id: "program",
    label: "Program",
    minWidth: 170,
    align: "right",
  },
  {
    id: "year",
    label: "Year",
    minWidth: 170,
    align: "right",
  },
];

function FindTable({ users, handleSelect }) {
  const rows = users;

  const parseCourses = (courses) => {
    let coursesParsed = "";
    courses.forEach((element, i) => {
      if (i !== courses.length - 1) {
        coursesParsed = coursesParsed + element + ", ";
      } else {
        coursesParsed = coursesParsed + element;
      }
    });
    return (
      <TableCell>
        <p>{coursesParsed}</p>
      </TableCell>
    );
  };

  return (
    <Paper className="paper">
      <TableContainer className="tableContainer">  
        <Table stickyHeader>
          <TableHead>
            <TableRow size="small">
              {columns.map((header, index) => (
                <TableCell size="small" key={index}>
                  <h3>{header.label}</h3>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} hover onClick={() => handleSelect(index)}>
                <TableCell component="th" scope="row">
                  <div className="username">
                    <img className="smallProfile" src={row["profileImg"]} />
                    <p>{row["username"]}</p>
                  </div>
                </TableCell>
                {parseCourses(row["courses"])}
                <TableCell align="left">
                  <p>{row["program"]}</p>
                </TableCell>
                <TableCell align="left">
                  <p>{row["year"]}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default FindTable;
