import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

class IG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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
    console.log(igArray);
    igArray.forEach(photo => {
      if (
        photo.type === "image" &&
        photo.images.standard_resolution.height < 700
      ) {
        pictures.push({
          src: photo.images.standard_resolution.url,
          width: 3,
          height: 3
        });
      } else if (
        photo.type === "image" &&
        photo.images.standard_resolution.height > 700
      ) {
        pictures.push({
          src: photo.images.standard_resolution.url,
          width: 3,
          height: 4
        });
      }
    });

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return pictures;
  };

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    const { photos } = this.state;

    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <h2 className="photo_heading">Follow me on InstaGram!</h2>
        </div>
        <div className="center_wrapper">
          <div className="ig_photos">
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IG;
