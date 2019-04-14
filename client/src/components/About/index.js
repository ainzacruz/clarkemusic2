import React from "react";
import YouTube from "./YouTube";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="about">
              <div className="about_title">ABOUT</div>
              <div className="about_desc">
                SF-based multi-instrumentalist looper, James Clarke was brought
                up singing and performing in his local church, but it wasn't
                until his senior year in high school that he finally started
                realizing an appetite for music. Upon entering college, he
                started recruiting other players and began releasing and
                performing music under his surname, "Clarke". For the next few
                years, the band went under numerous renovations until ultimately
                transitioning into a solo act in 2013. Using extensive loops,
                layers, and catchy melodies, his live performances navigate
                through sultry vocals and dip into the grittiness of rock.{" "}
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <YouTube
                    video="osWa2WrQkiE"
                    autoplay="0"
                    rel="0"
                    modest="1"
                  />
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About;
