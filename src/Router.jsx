import {createBrowserRouter} from "react-router-dom"
import Dashboardlayout from "./Layout/Dashboardlayout"
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import Settings from "./Pages/Settings"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboardlayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/users",
                element: <Users/> 
            }
        ]
    }
])

export default router
