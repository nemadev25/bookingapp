import "./sidebar.css";
import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  PersonOutline,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydream,
  Store,
} from "@mui/icons-material/";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">nemadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <PersonOutline className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels">
            <li>
              <Store className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms">
            <li>
              <CreditCard className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
