import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem({children, linkClass, to, item, profileDiv}) {
  const [isDropped, setIsDropped] = useState(false);

	const openMenu = () => {
		setIsDropped(!isDropped)
	}
  return (
    <div className={profileDiv}>
      <Link className={linkClass} to={to} onClick={openMenu}>
        {item}
      </Link>
			{(isDropped && children)}
    </div>
  );
}

export default NavItem;
