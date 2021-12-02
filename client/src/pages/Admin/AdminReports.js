import React, {useState} from "react";
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

const reportsData = [
	{
		reportID: 0,
		reporter: "a",
		reported: "b",
		// there will be a tight word count on the content, so it doesn't overflood the cells in the tbale
		content: "Toxixcity, Verbal Abuse"
	},
	{
		reportID: 1,
		reporter: "b",
		reported: "c",
		content: "This person is trolling"
	}
];

const AdminReports = () => {
	const [reports, setReports] = useState(reportsData)
	const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
	
	const [selectedID, setSelectedID] = useState(null);
  const handleClick = (e, reportID) => {
    setAnchorEl(e.currentTarget);
		console.log(reportID);
		setSelectedID(reportID);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	const removeID = () => {
		console.log(selectedID)
		setReports(prev => {
			let filtered = prev.filter(report => report["reportID"] !== selectedID);
			return resetID(filtered, "reportID")
		});
		handleClose()
	}
  return (
    <>
      <h1> Reports </h1>
      <Divider className="Admin-tableDivider" />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Reporter</TableCell>
              <TableCell align="right">Reported</TableCell>
              <TableCell align="right">Message</TableCell>
							<TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report["reportID"]}>
                <TableCell component="th" scope="row">
                  {report["reportID"]}
                </TableCell>
                <TableCell align="right">{report["reporter"]}</TableCell>
                <TableCell align="right">{report["reported"]}</TableCell>
                <TableCell className="Admin-reportcontent" align="right">{report["content"]}</TableCell>
                <TableCell align="right">
                  <MoreVertIcon className="Admin-moreIcon" onClick={e => handleClick(e, report["reportID"])}/>
                </TableCell>
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
        <MenuItem onClick={removeID}>Remove</MenuItem>
      </Menu>
    </>
  );
};

export default AdminReports;
