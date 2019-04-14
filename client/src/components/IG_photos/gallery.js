import React, { Component } from "react";
import Gallery from "react-photo-gallery";

class IG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callInstagramAPI()
      .then(res => this.setState({ photos: res }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server.
  callInstagramAPI = async () => {
    const response = await fetch("/ig_photos");
    const body = await response.json();
    let pictures = [];
    const igArray = body.data.data;
    igArray.forEach(photo => {
      pictures.push({
        src: photo.images.standard_resolution.url,
        width: 3,
        height: 3
      });
    });

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return pictures;
  };

  render() {
    const { photos } = this.state;

    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <h2 className="photo_heading">Follow me on InstaGram!</h2>
        </div>
        <div className="center_wrapper">
          <div className="ig_photos">
            <Gallery photos={photos} />
          </div>
        </div>
      </div>
    );
  }
}

export default IG;
