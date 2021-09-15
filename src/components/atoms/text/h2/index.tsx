import React from 'react';
import styles from './style.module.scss';

const H2: React.FC = ({ children }) => {
  return (
    <div>
      <h2 className={styles.text}>{children}</h2>
    </div>
  );
};

export default H2;
