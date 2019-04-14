import React from "react";
import Carousel from "./Carousel";
import Fade from "react-reveal/Fade";

const Featured = () => {
  return (
    <Fade top>
      <div style={{ position: "relative" }}>
        <Carousel />
        <div className="artist_name">
          <div className="wrapper">Clarke Music</div>

          <div className="icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/clarkemusic/"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/jamesthemagnificent"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/3KTsBmEObOj8cuOtnyoogI?si=GV_PYft8QTeHwuk-UHEgsg"
            >
              <i className="fab fa-spotify fa-2x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/jamesclarke01"
            >
              <i className="fab fa-youtube fa-2x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:clarke.jamesp@gmail.com"
            >
              <i className="fa fa-envelope fa-2x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Featured;
