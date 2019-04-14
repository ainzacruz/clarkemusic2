import React from "react";
import Fade from "react-reveal/Fade";

const Show = () => {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2>Upcoming Shows</h2>
        <div className="highlight_description">
          <div>
            July 13, 2019
            <span className="event_location">Neck of the Woods - SF</span>
            <span className="event_info">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.songkick.com/concerts/37555824-moonlight-graham-at-neck-of-the-woods?utm_source=8123&utm_medium=partner&utm_content=32ae3eeec17f57b6e44176ca82c67158&utm_campaign=entity"
              >
                View
              </a>
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Show;
