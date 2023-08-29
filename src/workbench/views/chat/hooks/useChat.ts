import { useEffect, useRef, useState } from 'react';

import { io } from 'socket.io-client';
import { Message } from '../types';

const socket = io('http://localhost:3001');

export const useChat = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | unknown>(false);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<Message>>([]);

  const chatBotton = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/v1/chat');
      const messages = await res.json();
      setMessages(messages);
      chatBotton.current?.scrollIntoView({ behavior: 'smooth' });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      setMessages([]);
    }
  };

  const onMessageChange = (value: string) => {
    setMessage(value);
  };

  const onSend = () => {
    if (message) {
      socket.emit('message', {
        owner: localStorage.getItem('username') || 'nouser',
        message,
      });
      setMessage('');
    }
  };

  const onMessage = (message: Message) => {
    console.log('lol');
    setMessages([...messages, message]);
    chatBotton.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    socket.on('messageResponse', onMessage);
    return () => {
      socket.off('messageResponse', onMessage);
    };
  }, [socket, messages]);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    chatBotton.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return {
    messageValue: message,
    messages,
    isLoading: loading,
    error,
    chatBotton,

    onSend,
    onMessageChange,
  };
};
