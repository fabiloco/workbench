import { FC, ReactNode } from 'react';

import styles from './styles/heading.module.css';

interface HeadingProps {
  children: ReactNode;
};

export const Heading: FC<HeadingProps> = ({children}) => {
  return (
    <h4
      className={styles.heading}
    >
      {children}
    </h4>
  );
};
