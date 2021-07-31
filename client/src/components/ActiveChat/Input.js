import React, { useState } from "react";
import { FormControl, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = ({ conversationId, otherUser }) => {
  const [inputText, setInputText] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const postNewMessage = (message) => dispatch(postMessage(message));

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // check if string is empty or only contains whitespace
    if (inputText.trim()) {
      // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
      const reqBody = {
        text: event.target.text.value,
        recipientId: otherUser.id,
        conversationId: conversationId,
        sender: conversationId ? null : user,
      };
      postNewMessage(reqBody);
      setInputText("");
    }
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={inputText}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
    </form>
    );
  }

export default Input;
