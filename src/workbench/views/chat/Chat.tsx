import { FC, useState } from 'react';

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

  const {
    messageValue,
    messages,
    isLoading,
    error,
    onMessageChange,
    onSend,
    chatBotton,
  } = useChat();

  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  );

  if (isLoading) {
    return (
      <div className={styles.container}>
        <span className={styles.span}>loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <span className={styles.span}>
          Oops... There was an error while trying to fetch the data :/
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {messages?.map(({ uuid, owner, message }) => (
        <Message key={uuid} user={owner} text={message} />
      ))}

      {username === localStorage.getItem('username') ? (
        <ChatInput
          value={messageValue}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={(e) => e.key == 'Enter' && onSend()}
        />
      ) : (
        <UsernameInput setUsername={setUsername} />
      )}

      <div style={{ marginTop: '2rem' }} ref={chatBotton} />
    </div>
  );
};
