import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
            <LanguageOutlined className="icon" />
            <span>English</span>
          </div>
          <div className="navbar__item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="navbar__item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="navbar__item">
            <NotificationsNoneOutlined className="icon" />
            <span className="counter">1</span>
          </div>
          <div className="navbar__item">
            <ChatBubbleOutlineOutlined className="icon" />
            <span className="counter">2</span>
          </div>
          <div className="navbar__item">
            <ListOutlined className="icon" />
          </div>
          <div className="navbar__item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
