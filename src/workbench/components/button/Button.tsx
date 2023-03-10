import { FC, ReactNode } from 'react';

import styles from './styles/button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
