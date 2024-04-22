import React, { useState } from 'react';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const whatsappEmojis = ['😀', '😂', '😊', '😍', '😎', '😘', '🤗', '👍', '👌'];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: inputText,
        likes: 0
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  const addEmojiToInput = (emoji) => {
    setInputText(inputText + emoji);
  };

  return (
    <div className="App">
      <div className="user-details">
        <h2 className='user-details-1'>Users</h2>
        <ul>
          {user_list.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat-window">
        <div className="conversation-details">
          <h2>Conversation Details</h2>
          <p>Conversation started at: {new Date().toLocaleString()}</p>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="user">{message.user}</div>
              <div className="text">{message.text}</div>
              <button onClick={() => handleLike(index)}>Like</button>
              <span className="likes">{message.likes}</span>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
          <div className="emoji-buttons">
            {whatsappEmojis.map((emoji, index) => (
              <button key={index} onClick={() => addEmojiToInput(emoji)}>{emoji}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
