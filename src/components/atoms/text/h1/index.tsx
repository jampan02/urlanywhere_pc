import React from 'react';
import styles from './style.module.scss';

const H1: React.FC = ({ children }) => {
  return (
    <div>
      <h1 className={styles.text}>{children}</h1>
    </div>
  );
};

export default H1;
