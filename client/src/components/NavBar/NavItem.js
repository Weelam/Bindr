import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem({ children, linkClass, to, item, outerDiv, drop}) {
  let isDropped;
  let setIsDropped;
  let setOtherDropped;
  if (drop) {
    ({ isDropped, setIsDropped, setOtherDropped } = drop);
  }
  const openMenu = () => {
    if (setIsDropped) {
      setIsDropped(!isDropped);
      setOtherDropped(false);
    }
  };

  return (
    <div className={outerDiv}>
      <Link className={linkClass} to={to} onClick={openMenu}>
        {item}
      </Link>
      {isDropped && children}
    </div>
  );
}

export default NavItem;
