import { FC, ReactNode } from 'react';

import styles from './styles/text.module.css';

interface TextProps {
  children: ReactNode;
};

export const Text: FC<TextProps> = ({children}) => {
  return (
    <p
      className={styles.p}
    >
      {children}
    </p>
  );
};
