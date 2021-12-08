import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./styles/styleAdminTables.css";
import { resetID } from "./Helper.js";
import { getAllUsers, removeUser } from "../../actions/user";

const formatList = (list) => {
  return list.map((x) => {
    return x + ", ";
  });
};
const AdminUsers = ({ currentUser }) => {
  const [users, setUsers] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selectedID, setSelectedID] = useState(null);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  const handleClick = (e, userID) => {
    setAnchorEl(e.currentTarget);
    console.log(userID);
    setSelectedID(userID);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeID = () => {
    console.log(selectedID);
    removeUser(selectedID, setUsers);

    handleClose();
  };

  return (
    <>
      <h1> Users </h1>
      <Divider className="Admin-tableDivider" />
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
            {users &&
              users.map((user) => (
                <TableRow key={user["_id"]}>
                  <TableCell component="th" scope="row">
                    {user["_id"]}
                  </TableCell>
                  <TableCell align="right">{user["username"]}</TableCell>
                  <TableCell align="right">{user["profile"]["name"]}</TableCell>
                  <TableCell align="right">
                    {formatList(user["profile"]["courses"])}
                  </TableCell>
                  <TableCell align="right">{user["profile"]["program"]}</TableCell>
                  <TableCell align="right">{user["profile"]["year"]}</TableCell>
                  <TableCell align="right">
                    <MoreVertIcon
                      className="Admin-moreIcon"
                      onClick={(e) => handleClick(e, user["_id"])}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={removeID}>Permanently Ban</MenuItem>
      </Menu>
    </>
  );
};

export default AdminUsers;
