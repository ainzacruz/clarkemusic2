import React, { Component } from "react";

// import request from "superagent";
// import BackArrow from "./backarrow.js";
// import NextArrow from "./nextarrow.js";
import Gallery from "react-photo-gallery";
require("dotenv").config();
// const api_key = process.env.REACT_APP_API_KEY;

class IG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          src:
            "https://images.unsplash.com/photo-1441906363162-903afd0d3d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          width: 4,
          height: 3
        }
      ],
      slideCount: 0
    };

    // this.previousImage = this.previousImage.bind(this);
    // this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callInstagramAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callInstagramAPI = async () => {
    const response = await fetch("/ig_photos");
    const body = await response.json();
    console.log(body.data.data);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // componentWillMount() {
  //   this.fetchPhotos();
  // }

  // fetchPhotos() {
  //   request
  //     .get(
  //       `https://api.instagram.com/v1/users/self/media/recent/?access_token=${api_key}`
  //     )
  //     .then(res => {
  //       this.setState({
  //         photos: res.body.data
  //       });
  //     });
  // }

  // nextImage() {
  //   this.setState({ slideCount: this.state.slideCount + 1 });
  // }

  // previousImage() {
  //   this.setState({ slideCount: this.state.slideCount - 1 });
  // }

  render() {
    const { photos } = this.state;
    // const { slideCount } = this.state;

    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <h2 className="photo_heading">Follow me on InstaGram!</h2>
        </div>
        <div className="center_wrapper">
          <div>
            <Gallery photos={photos} />
          </div>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px"
            }}
          >
            {slideCount !== 0 ? (
              <BackArrow previousImage={this.previousImage} />
            ) : (
              ""
            )}
            {photos.map((photo, key) => {
              if (photos.indexOf(photo) === slideCount) {
                return (
                  <div key={photo.id} style={{ margin: "0 auto" }}>
                    <img src={photo.images.standard_resolution.url} alt="" />
                    <div
                      style={{
                        width: "600px",
                        margin: "24px auto",
                        fontStyle: "italic"
                      }}
                    >
                      {photo.caption !== null ? photo.caption.text : ""}
                    </div>
                  </div>
                );
              }
              return "";
            })}
            {slideCount !== photos.length - 1 ? (
              <NextArrow nextImage={this.nextImage} />
            ) : (
              ""
            )}{" "}
          </div> */}
        </div>
      </div>
    );
  }
}

export default IG;
