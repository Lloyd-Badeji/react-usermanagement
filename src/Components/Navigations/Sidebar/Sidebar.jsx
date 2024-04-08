import React from "react";
import "./Sidebar.css";
import Navlinks from "../navlinks/Navlinks";
import { FaHome, FaUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

const links = [
    { to: "/", icon: <FaHome/>, label: "Home", id: 1 },
    { to: "/users", icon: <FaUser/>, label: "Users", id: 2 },
    { to: "/settings", icon: <AiOutlineSetting/>, label: "Settings", id: 3 }
];

const Sidebar = () => {
    return (
        <div id="side-wrapper"> 
            <div id="links">
                {links.map(({ to, icon, label, id }) => (
                    <Navlinks key={id} to={to} label={label}>
                        {icon}
                    </Navlinks>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
 