import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    fontWeight: "bold",
    letterSpacing: -0.17,
  },
  previewTextUnread: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: -0.17,
  },
  unread: {
    marginRight: 40,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation, unread } = props;
  const { latestMessageText, otherUser } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={ unread ? (classes.previewTextUnread) : (classes.previewText) }>
          {latestMessageText}
        </Typography> 
      </Box>
      <Box className={classes.unread}>
        <Badge badgeContent={unread} color="primary"></Badge>
      </Box>
    </Box>
  );
};

export default ChatContent;
