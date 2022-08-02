import "./Sidebar.css"
import DashboardIcon from '../images/dashboard.svg'
import AddIcon from '../images/add.svg'
import Avatar from "./Avatar"

import { NavLink } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Sidebar() {

  const {user} = useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hi {user.displayName} ~</p>  
        </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}