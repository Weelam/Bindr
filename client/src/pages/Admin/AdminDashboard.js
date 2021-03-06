import React from "react";
import "./styles/styleAdminDashboard.css";
import Widget from "../../components/Admin/Widget";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

// hard coded data for the reports and messages, this will be inserted into the widgets below
const reports = [
  {
    user: "a",
    content: "Toxicity, Verbal Abuse",
  },
  { user: "b", content: "Ths guy is trolling me" },
];

const AdminDashboard = ({ currentUser, users }) => {
  return (
    <>
      <h1> Dashboard </h1>
      <Divider />
      <div className="AdminDashboard-root">
        <Widget className="Widget-reports" title="Reports">
          <ul>
            {reports.map((report, i) => {
              return (
                <Link  key={i} to="reports">
                  <div className="Widget-liContainer">
                    <li>
                      {report["user"]} - {report["content"]}
                    </li>
                  </div>{" "}
                </Link>
              );
            })}
          </ul>
        </Widget>
      </div>
    </>
  );
};

export default AdminDashboard;
