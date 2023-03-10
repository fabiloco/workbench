import { FC } from 'react';
import { Button, Heading, Text } from '../../components';

import { useTaskActions } from '../../store';
import { Message } from './components';

import styles from './styles/chat.module.css';

interface ChatProps {
  heading?: string;
  message?: string;
  taskID: number;
}

export const Chat: FC<ChatProps> = ({ heading, message, taskID }) => {
  const { toggleTask } = useTaskActions();

  return (
    <div className={styles.container}>
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
      <Message
        user='fabiloco'
        text='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
      />
    </div>
  );
};
