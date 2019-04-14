import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_yellow">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Clarke Music</div>
        <div className="footer_copyright">
          clarke music 2019. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
