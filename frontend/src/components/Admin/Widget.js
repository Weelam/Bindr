import React from "react";
import "./styleWidgets.css"
const Widget = ({ children, title }) => {
  return (
    <div className="Widget-root">
			<h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Widget;
