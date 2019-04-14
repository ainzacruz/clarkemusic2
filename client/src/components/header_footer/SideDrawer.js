import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scroll = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List className="nav">
        <ListItem button="true" onClick={() => scroll("home")}>
          <p className="list_item">Home</p>
        </ListItem>
        <ListItem button="true" onClick={() => scroll("about")}>
          <p className="list_item">About</p>
        </ListItem>
        <ListItem button="true" onClick={() => scroll("shows")}>
          <p className="list_item">Shows</p>
        </ListItem>
        <ListItem button="true" onClick={() => scroll("photos")}>
          <p className="list_item">Photos</p>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
