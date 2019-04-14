import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import Button from "@material-ui/core/Button";
import { scroller } from "react-scroll";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerFade: false
  };

  scroll(element) {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {}

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerFade: true
      });
    } else {
      this.setState({
        headerFade: false
      });
    }
  };
  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerFade ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "2px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">Clarke</div>
          </div>
          <Button className="button" button onClick={() => this.scroll("home")}>
            Home
          </Button>
          <Button
            className="button"
            button
            onClick={() => this.scroll("about")}
          >
            About
          </Button>
          <Button
            className="button"
            button
            onClick={() => this.scroll("shows")}
          >
            Shows
          </Button>
          <Button
            className="button"
            button
            onClick={() => this.scroll("photos")}
          >
            Photos
          </Button>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
