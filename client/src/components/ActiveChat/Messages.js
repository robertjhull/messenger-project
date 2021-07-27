import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = ({ messages, otherUser, userId }) => {

  // loops through messages in reverse to find last read
  const getLastReadId = (messages) => {
    let idx = messages.length - 1;
    while (idx >= 0) {
      const msg = messages[idx];
      if (msg.isRead && msg.senderId === userId) return msg.id
      idx--;
    }
    return -1;
  }

  const lastReadId = getLastReadId(messages);
  
  return (
    <Box>
      {messages.map((message, idx) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={ lastReadId === message.id ? otherUser : false } />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;