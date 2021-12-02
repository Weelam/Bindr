import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./styles/filterStyle.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import FindFilterForm from "./FindFilterForm";

const FindFilter = ({ filter, setfilter }) => {
  const [anchor1, setAnchor1] = useState(null);
  const [anchor2, setAnchor2] = useState(null);

  const [course, setCourse] = useState("");
  const [program, setProgram] = useState("");

  const handleClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleCourse = (e) => {
    e.preventDefault();
    setfilter((prev) => ({ ...prev, courses: [...prev["courses"], course] }));
    handleClose(setAnchor1);
    setCourse("");
  };

  const handleProgram = (e) => {
    e.preventDefault();
    setfilter((prev) => ({
      ...prev,
      programs: [...prev["programs"], program],
    }));
    handleClose(setAnchor2);
    setProgram("");
  };

  const filterYear = (year) => {
    if (filter["years"].includes(year)) {
      setfilter((prev) => ({
        ...prev,
        years: prev["years"].filter((x) => x !== year),
      }));
    } else {
      setfilter((prev) => ({
        ...prev,
        years: [...prev["years"], year],
      }));
    }
  };

  const handleYear = (e) => {
    const year = e.target.value;
    switch (year) {
      case "1st":
        filterYear(year);
        break;
      case "2nd":
        filterYear(year);
        break;
      case "3rd":
        filterYear(year);
        break;
      case "4th":
        filterYear(year);
        break;
      default:
        console.log("defaulted, something went wrong!");
    }
  };

  const handleRemoveFilter = (e, filterType) => {
    if (e.target.previousElementSibling) {
      let filterToRemove = e.target.previousElementSibling.innerText;
      console.log(filterToRemove);
      setfilter((prev) => ({
        ...prev,
        [filterType]: prev[filterType].filter((x) => x !== filterToRemove),
      }));
    }
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="filterRoot">
      <h4> Courses </h4>
      <FindFilterForm
        handleCourse={handleCourse}
        setCourse={setCourse}
        value={course}
        type="courses"
        list={["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"]}
      />
      {filter["courses"].map((course, index) => {
        return (
          <div key={index}>
            <p> {course} </p>
            <CloseIcon onClick={(e) => handleRemoveFilter(e, "courses")} />
          </div>
        );
      })}
      <h4> Program </h4>
      <FindFilterForm
        handleCourse={handleProgram}
        setCourse={setProgram}
        value={program}
        type="programs"
        list={["Gender Studies", "Hamburger Flipping", "Political Science", "Cinema Studies"]}
      />
      {filter["programs"].map((program, index) => {
        return (
          <div key={index}>
            <p> {program} </p>
            <CloseIcon onClick={(e) => handleRemoveFilter(e, "programs")} />
          </div>
        );
      })}
      
      <h4> Year </h4>
      <form className="filterYear">
        <div>
          <input
            onClick={(e) => handleYear(e)}
            type="checkbox"
            id="year1"
            name="year1"
            value="1st"
          />
          <label htmlFor="year1"> First </label>
        </div>

        <div>
          <input
            onClick={(e) => handleYear(e)}
            type="checkbox"
            id="year2"
            name="year2"
            value="2nd"
          />
          <label htmlFor="year2"> Second </label>
        </div>

        <div>
          <input
            onClick={(e) => handleYear(e)}
            type="checkbox"
            id="year3"
            name="year3"
            value="3rd"
          />
          <label htmlFor="year3"> Third </label>
        </div>

        <div>
          <input
            onClick={(e) => handleYear(e)}
            type="checkbox"
            id="year4"
            name="year4"
            value="4th"
          />
          <label htmlFor="year4"> Fourth </label>
        </div>
      </form>
    </div>
  );
};

export default FindFilter;
