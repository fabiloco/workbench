import { FC, useEffect, useState } from 'react';
import { Button, Heading, Text } from '../../components';

import { useTaskActions } from '../../store';
import { Message } from './components';
import { ChatInput } from './components/chatInput';
import { UsernameInput } from './components/usernameInput';
import { useChat } from './hooks';

import styles from './styles/chat.module.css';

interface ChatProps {
  heading?: string;
  message?: string;
  taskID: number;
}

export const Chat: FC<ChatProps> = ({ heading, message, taskID }) => {
  const { toggleTask } = useTaskActions();

  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  );

  const { messageValue, onMessageChange, onSend } = useChat();

  useEffect(() => {
    console.log('username changed');
  }, [username]);

  return (
    <div className={styles.container}>
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />

      {username === localStorage.getItem('username') ? (
        <ChatInput
          value={messageValue}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={(e) => e.key == 'Enter' && onSend()}
        />
      ) : (
        <UsernameInput setUsername={setUsername} />
      )}
    </div>
  );
};
