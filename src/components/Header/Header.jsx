import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/Netflix-Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img className="netflix_logo" src={NetflixLogo} alt="" />
              </li>
              <li className="header_links">Home</li>
              <li className="header_links">TVShows</li>
              <li className="header_links">Movies</li>
              <li className="header_links">Latest</li>
              <li className="header_links">MyList</li>
              <li className="header_links">Browse by Languages</li>
            </ul>
          </div>

          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
