import { FC, useState } from 'react';
import { Text } from '../../../../components';

import styles from '../../styles/chat.module.css';

interface UsernameInput {
  setUsername: (value: string) => void;
}

export const UsernameInput: FC<UsernameInput> = ({ setUsername }) => {
  const [value, setValue] = useState('');

  const onChangeInput = (value: string) => {
    setValue(value);
  };

  const saveUsername = () => {
    setUsername(value);
    localStorage.setItem('username', value);
  };

  return (
    <div className={styles.input_container}>
      <Text>
        <span className={styles.span}>Enter a username{'>'}:</span>
      </Text>
      <input
        autoFocus
        className={styles.input}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        onKeyPress={(e) => e.key == 'Enter' && saveUsername()}
      />
    </div>
  );
};
