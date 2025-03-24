import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons"></div>
          <div className="footer_data">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="footer_icons"></div>
          <div className="footer_icons"></div>
          <div className="footer_icons"></div>
          <div className="footer_icons"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
