import React, {useRef, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./styles/styleAdminTables.css";
import {resetID} from "./Helper.js"

const AdminUsers = ({ users, setUsers }) => {

	const formatList = (list) => {
		return list.map(x => {
			return x + ", "
		})
	}

	const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
	
	const [selectedID, setSelectedID] = useState(null);

  const handleClick = (e, userID) => {
    setAnchorEl(e.currentTarget);
		console.log(userID);
		setSelectedID(userID);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	const removeID = () => {
		console.log(selectedID)
		setUsers(prev => {
			let filtered = prev.filter(useRef => useRef["userID"] !== selectedID);
			return resetID(filtered, "userID")
		});
		handleClose()
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
          {users && users.map((user) => (
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
							<TableCell align="right"><MoreVertIcon className="Admin-moreIcon"  onClick={e => handleClick(e, user["userID"])}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

		<Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={removeID}>Permanently Ban</MenuItem>
      </Menu>
    </>
  );
};

export default AdminUsers;
