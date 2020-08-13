import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { Notifications as NotificationsIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>To Do List</Typography>
          <div className={classes.grow} />
          <IconButton edge="end">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon></NotificationsIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
