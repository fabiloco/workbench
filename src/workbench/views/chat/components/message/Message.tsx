import { FC } from 'react';
import { Text } from '../../../../components';

import styles from './styles/message.module.css';

interface MessageProps {
  user: string;
  text: string;
}

export const Message: FC<MessageProps> = ({ text, user }) => {
  return (
    <div className={styles.container}>
      <Text>
        <span className={styles.user_span}>{user}</span>: {text}
      </Text>
    </div>
  );
};
