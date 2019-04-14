import React from "react";

const BackArrow = props => (
  <div
    onClick={props.previousImage}
    style={{ fontSize: "2em", marginRight: "12px" }}
  >
    <i className="fa fa-angle-left fa-2x" aria-hidden="true" />
  </div>
);
export default BackArrow;
