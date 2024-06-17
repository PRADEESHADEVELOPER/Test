import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [notificationCount, setNotificationCount] = useState<number>(0);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.current.onmessage = (event) => {
      const messageData = event.data;
      let message: Message;

      try {
        message = JSON.parse(messageData);
      } catch (e) {
        console.error('Failed to parse message', e);
        return;
      }

      setMessages((prevMessages) => [...prevMessages, message]);
      setNotificationCount((prevCount) => prevCount + 1);
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && input.trim()) {
      const message: Message = { text: input };
      setMessages((prevMessages) => [...prevMessages, message]);
      setNotificationCount((prevCount) => prevCount + 1);
      ws.current.send(JSON.stringify(message));
      setInput('');
    }
  };

  const handleNotificationClick = () => {
    setNotificationCount(0);
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <div>
        <button style={{ position: 'relative' }} onClick={handleNotificationClick}>
          Notifications
          {notificationCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '5px 10px',
                fontSize: '12px',
              }}
            >
              {notificationCount}
            </span>
          )}
        </button>
      </div>
      <div style={{ border: '1px solid black', height: '300px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
