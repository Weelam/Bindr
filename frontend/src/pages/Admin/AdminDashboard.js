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

const messages = [
  {
    user: "a",
    content: "hello",
  },
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
                <div key={i} className="Widget-liContainer">
                  <Link to="reports">
                    <li>
                      {report["user"]} - {report["content"]}
                    </li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </Widget>
        <Widget className="Widget-messages" title="Messages" header="something">
          <ul>
            {messages.map((message, i) => {
              return (
                <div key={i} className="Widget-liContainer">
                  <Link to="messages">
                    <li> {message["user"]} has messaged you </li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </Widget>
      </div>
    </>
  );
};

export default AdminDashboard;
