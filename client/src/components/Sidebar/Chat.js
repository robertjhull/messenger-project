import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { updateReadStatus } from "../../store/utils/thunkCreators";
import { connect } from "react-redux";

const styles = {
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
};

class Chat extends Component {
  handleClick = async (conversation) => {
    await this.props.setActiveChat(conversation.otherUser.username);
    await this.updateConversationUnread(conversation);
  };

  updateConversationUnread = async (conversation) => {
    // checks if conversation is already read to avoid extra api calls
    if (conversation.totalUnread) {
      await this.props.updateReadStatus({
        conversationId: conversation.id,
        senderId: conversation.otherUser.id
      });
    }
  }

  componentDidUpdate(prevProps) {
    // automatically update read status if active conversation receives a new message
    if (this.props.activeConversation && prevProps.activeConversation === this.props.activeConversation) {
      this.updateConversationUnread(this.props.conversation);
    }
  }

  render() {
    const { classes, conversation } = this.props;
    const { otherUser, totalUnread } = conversation;
    
    return (
      <Box
        onClick={() => this.handleClick(conversation)}
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
}

const mapStateToProps = (state) => {
  return { activeConversation: state.activeConversation };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    updateReadStatus: (conversationId) => {
      dispatch(updateReadStatus(conversationId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Chat));
