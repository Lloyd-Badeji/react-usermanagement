import React from "react";
import {Outlet} from "react-router-dom"
import './Dashboardlayout.css';
import Sidebar from "../Components/Navigations/Sidebar/Sidebar";
import TopBar from "../Components/Navigations/Topbar/Topbar";


const Dashboardlayout = () => {
    return(
        <div id= "Layout">
            <Sidebar/>
            <Outlet/>
            <div><TopBar/></div>
        </div>
        
    )
}

export default Dashboardlayout