import React from "react";

const FindFilterForm = ({handleCourse, setCourse, value, type, list}) => {

  return (
    <form onSubmit={handleCourse}>
      <input
        onChange={(e) => setCourse(e.target.value)}
        value={value}
        list={type}
        name={type}
      />

      <datalist id={type}>
        {/* map all the courses here */}
        {list.map((item, index) => (<option key={index} value={item}/>))}
      </datalist>

      <input className="filterSubmit" type="submit" value="Submit" />
    </form>
  );
};

export default FindFilterForm;
