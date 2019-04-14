import React from "react";

const NextArrow = props => (
  <div
    onClick={props.nextImage}
    style={{ fontSize: "2em", marginLeft: "12px" }}
  >
    <i className="fa fa-angle-right fa-2x" aria-hidden="true" />
  </div>
);
export default NextArrow;
