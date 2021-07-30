import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { updateReadStatus } from "../../store/utils/thunkCreators";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
}));

const Chat = ({ conversation }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { otherUser, totalUnread } = conversation;

  const activeConversation = useSelector((state) => state.activeConversation);
  const setActiveConvo = (id) => dispatch(setActiveChat(id));
  const setReadStatus = (conversationId) => dispatch(updateReadStatus(conversationId));

  const handleClick = async (conversation) => {
    setActiveConvo(conversation.otherUser.username);
    await updateConversationUnread(conversation);
  };

  const updateConversationUnread = async(conversation) => {
    // checks if conversation is already read to avoid extra api calls
    if (conversation.totalUnread) {
      setReadStatus({
        conversationId: conversation.id,
        senderId: conversation.otherUser.id
      });
    }
  }

  useEffect(() => {
    const activeConvo = activeConversation ?? "";
    if (activeConvo === otherUser.username) {
      updateConversationUnread(conversation);
    }
  }, [conversation]);

  return (
    <Box
      onClick={() => handleClick(conversation) }
      className={classes.root}
    >
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} unread={totalUnread} />
    </Box>
  );
}

export default Chat;
