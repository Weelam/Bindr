import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./styles/styleAdminTables.css";
// the hard coded data for all the courses offered
const courses = [
  {
    courseID: 0,
    course: "CSC309",
    name: "Web Dev",
    term: "Fall",
    instructor: "someone",
    department: "Computer Science",
  },
  {
    courseID: 1,
    course: "CSC373",
    name: "Alg",
    term: "Fall",
    instructor: "someone",
    department: "Computer Science",
  },
  {
    courseID: 2,
    course: "MLG420",
    name: "bruh what?",
    term: "Fall",
    instructor: "someone",
    department: "Computer Science",
  },
  {
    courseID: 3,
    course: "POK220",
    name: "Gotta catch em all",
    term: "Fall",
    instructor: "someone",
    department: "Computer Science",
  },
  {
    courseID: 4,
    course: "BEN10",
    name: "Ben 10",
    term: "Fall",
    instructor: "someone",
    department: "Computer Science",
  },
];

const AdminCourses = () => {
  return (
    <>
      <h1> Courses </h1>
      <Divider className="Admin-tableDivider"/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Term</TableCell>
              <TableCell align="right">Instructor</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course["courseID"]}>
                <TableCell component="th" scope="row">
                  {course["courseID"]}
                </TableCell>
                <TableCell align="right">{course["course"]}</TableCell>
                <TableCell align="right">{course["name"]}</TableCell>
                <TableCell align="right">{course["term"]}</TableCell>
                <TableCell align="right">{course["instructor"]}</TableCell>
                <TableCell align="right">{course["department"]}</TableCell>
                <TableCell align="right">
                  <MoreVertIcon className="Admin-moreIcon" onClick={() => alert("does nothing right now")}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminCourses;
