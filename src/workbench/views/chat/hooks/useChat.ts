import { useEffect, useState } from 'react';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export const useChat = () => {
  const [message, setMessage] = useState('');

  const onMessageChange = (value: string) => {
    setMessage(value);
  };

  const onSend = () => {
    if (message) {
      socket.emit('message', { owner: 'lol', message });
    }
  };

  return {
    messageValue: message,

    onSend,
    onMessageChange,
  };
};
