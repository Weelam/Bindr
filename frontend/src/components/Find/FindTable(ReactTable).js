import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import "./tableStyle.css";

const columns = [
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Courses",
    accessor: "courses",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Year",
    accessor: "year",
  },
];

function FindTable({ users }) {
  const columnsMemo = useMemo(() => columns, []);
  const usersMemo = useMemo(() => users, []);

  const table = useTable({
    columns: columnsMemo,
    data: usersMemo,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  return (
    <div >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((header) => (
            <tr {...header.getHeaderGroupProps()}>
              {header.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <div>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="row">
                  {row.cells.map((cell) => {
                    if (cell["column"]["Header"] === "Courses") {
                      let courses = "";
                      cell["value"].forEach((element, i) => {
                        if (i !== cell["value"].length - 1) {
                          courses = courses + element + ", ";
                        } else {
                          courses = courses + element;
                        }
                      });
                      return <td {...cell.getCellProps()}>{courses}</td>;
                    } else {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default FindTable;
