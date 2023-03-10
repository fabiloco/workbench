import { FC } from 'react';
import { Button, Heading, Text } from '../../components';

import { useTaskActions } from '../../store';

import styles from './styles/dialog.module.css';

interface DialogProps {
  heading?: string;
  message?: string;
  taskID: number;
}

export const Dialog: FC<DialogProps> = ({ heading, message, taskID }) => {
  const { toggleTask } = useTaskActions();
  return (
    <div className={styles.container}>
      <Heading>{heading}</Heading>
      <Text>{message}</Text>
      <Button onClick={() => toggleTask(taskID)}>OK</Button>
    </div>
  );
};
