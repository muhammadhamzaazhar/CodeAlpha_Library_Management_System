import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

import { AuthContext } from "../../context/auth-context";
import "./header.styles.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [menutoggle, setMenutoggle] = useState(false);

  const Toggle = () => {
    setMenutoggle(!menutoggle);
  };

  const closeMenu = () => {
    setMenutoggle(false);
  };

  return (
    <div className="header">
      <div className="logo-nav">
        <Link to="/">
          <a href="#home">LIBRARY</a>
        </Link>
      </div>
      <div className="nav-right">
        <input
          className="search-input"
          type="text"
          placeholder="Search a Book"
        />
        <ul className={menutoggle ? "nav-options active" : "nav-options"}>
          <li
            className="option"
            onClick={() => {
              closeMenu();
            }}
          >
            <Link to="/">
              <a href="#home">Home</a>
            </Link>
          </li>
          <li
            className="option"
            onClick={() => {
              closeMenu();
            }}
          >
            <Link to="/books">
              <a href="#books">Books</a>
            </Link>
          </li>
          <li
            className="option"
            onClick={() => {
              closeMenu();
            }}
          >
            <Link to="/signin">
              <a href="signin">SignIn</a>
            </Link>
          </li>
          {!user && (
            <li
              className="option register"
              onClick={() => {
                closeMenu();
              }}
            >
              <Link to="/signup">
                <a href="signup">SignUp</a>
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div
        className="mobile-menu"
        onClick={() => {
          Toggle();
        }}
      >
        {menutoggle ? (
          <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
        ) : (
          <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
        )}
      </div>
    </div>
  );
};

export default Header;
