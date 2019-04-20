import React from "react";
import Fade from "react-reveal/Fade";

const Show = () => {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2>Upcoming Shows</h2>
        <div className="event_wrapper">
          <div className="show_description">
            <div className="show_wrapper">
              <ul>
                <li>July 13, 2019</li>
                <li>Neck of the Woods - SF</li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.songkick.com/concerts/37555824-moonlight-graham-at-neck-of-the-woods?utm_source=8123&utm_medium=partner&utm_content=32ae3eeec17f57b6e44176ca82c67158&utm_campaign=entity"
                  >
                    View
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Show;
