import React, { Component } from "react";

class YouTube extends Component {
  render() {
    var videoSrc =
      "https://www.youtube.com/embed/" +
      this.props.video +
      "?autoplay=" +
      this.props.autoplay +
      "&rel=" +
      this.props.rel +
      "&modestbranding=" +
      this.props.modest;
    return (
      <div className="container">
        <iframe
          className="player"
          title="music_video"
          type="text/html"
          width="100%"
          height="100%"
          src={videoSrc}
          frameBorder="0"
        />
      </div>
    );
  }
}

export default YouTube;
