import React from "react";
import {Link} from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
  {
    primaryText: "Home",
    icon: "home"
  },
  {
    primaryText: "About",
    icon: "hdr_weak"
  },
  {
    primaryText: "Our Team",
    icon: "people"
  },
  {
    primaryText: "News & Events",
    icon: "announcement"
  },
  {
    primaryText: "Recognition",
    icon: "offline_pin"
  },
  {
    primaryText: "Pin Board",
    icon: "new_releases"
  },
  {
    primaryText: "Gallery",
    icon: "theaters"
  },
];
const NavContentEx = () => (
  <List>
    {list.map(({ primaryText, icon }, i) => (
      <ListItem key={primaryText} selected={i === 0} button>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem> 
    ))}
    <Divider style={{ margin: "12px 0" }} />
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Contact Us"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
