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
          <div className="footer_icons">
            <div className="">
              <FacebookOutlinedIcon />
            </div>
            <div className="">
              <InstagramIcon />
            </div>
            <div className="">
              <YouTubeIcon />
            </div>
          </div>
          <div className="footer_data">
            <div className="footer_left_side">
              <ul>
                <li>Audio and Subtitle</li>
                <li>Media Center</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="footer_middle_1">
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal relations</li>
              </ul>
            </div>
            <div className="footer_middle_2">
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Corporative Information</li>
              </ul>
            </div>
            <div className="footer_right_side">
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer_copy_right">
            <div className="service_code">Service code</div>
            <div className="">&copy; 2025 netflix, inc.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
