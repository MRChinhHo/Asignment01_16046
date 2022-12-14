import React from "react";
import "./NavBarltem.css";
const NavBarItems = (props) => {
  return (
    <div className="nav">
      <div className="navItemContainer">
        <div className="navList">
          {props.navItem.map((navItem) => (
            <div className={`navListItem ${navItem.active ? "active" : ""}`}>
              <span className={"fa " + navItem.icon}></span>
              <span>{navItem.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBarItems;
