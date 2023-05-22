import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit" }}>
          <span className="logo">nemabooking</span>
        </Link>
        {user ? (
          <span onClick={handleLogout}>{user.username}</span>
        ) : (
          <div className="navItems">
            <Link to="/auth/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/auth/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
