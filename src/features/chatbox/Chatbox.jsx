import React from "react";
import Message from "../message/Message";
import { useSelector, useDispatch } from "react-redux";
import { messageSent, setInput } from "./chatboxSlice";

const Chatbox = ({ user }) => {
  const messages = useSelector((state) => state.chatbox.players[user].messages);
  const input = useSelector((state) => state.chatbox.players[user].input);
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (input.trim() !== "") {
      dispatch(messageSent({ text: input, user }));
    }
  };

  return (
    <div className="box-wrap">
      <header className="user-title">
        <div className="user-icon">{user==='player1'?'x':'o'}</div>
        <p className="user-name">{user}</p>
      </header>
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} isOwn={msg.user === user} />
          ))}
        </div>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => dispatch(setInput({ user, input: e.target.value }))}
            placeholder="Message"
          />
          <input type="submit" value="" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
