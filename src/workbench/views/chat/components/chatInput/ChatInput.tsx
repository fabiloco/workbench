import { FC } from 'react';
import { Text } from '../../../../components';

import styles from '../../styles/chat.module.css';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const ChatInput: FC<ChatInputProps> = ({
  value,
  onChange,
  onKeyPress,
}) => {
  return (
    <div className={styles.input_container}>
      <Text>
        <span className={styles.span}>Enter{'>'}:</span>
      </Text>
      <input
        autoFocus
        value={value}
        className={styles.input}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};
