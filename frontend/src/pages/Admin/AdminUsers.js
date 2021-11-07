import React from "react";
import { Divider } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./styles/styleAdminTables.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdminUsers = ({ users }) => {
	const formatList = (list) => {
		return list.map(x => {
			return x + ", "
		})
	}

  return (
    <>
      <h1> Users </h1>
      <Divider className="Admin-tableDivider"/>
			<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Courses</TableCell>
            <TableCell align="right">Program</TableCell>
						<TableCell align="right">Year</TableCell>
						<TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user["userID"]}            
            >
              <TableCell component="th" scope="row">
                {user["userID"]}
              </TableCell>
              <TableCell align="right">{user["username"]}</TableCell>
              <TableCell align="right">{user["firstName"]}</TableCell>
              <TableCell align="right">{formatList(user["courses"])}</TableCell>
							<TableCell align="right">{user["program"]}</TableCell>
							<TableCell align="right">{user["year"]}</TableCell>
							<TableCell align="right"><MoreVertIcon className="Admin-moreIcon" onClick={() => alert("does nothing right now")}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default AdminUsers;
