import { useEffect, useRef, useState } from 'react';

import useSWR from 'swr';

import { io } from 'socket.io-client';
import { Message } from '../types';

const socket = io('http://localhost:3001');

export const useChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<Message>>([]);

  const chatBotton = useRef<HTMLDivElement>(null);

  const { data, error, isLoading } = useSWR<Array<Message>>(
    'http://localhost:3001/api/v1/chat',
    {
      onSuccess: () =>
        chatBotton.current?.scrollIntoView({ behavior: 'smooth' }),
    }
  );

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
    setMessages([...messages, message]);
    chatBotton.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    socket.on('message', onMessage);
    return () => {
      socket.off('message', onMessage);
    };
  }, [message]);

  useEffect(() => {
    setMessages(data || []);
  }, [data]);

  return {
    messageValue: message,
    messages,
    isLoading,
    error,
    chatBotton,

    onSend,
    onMessageChange,
  };
};
