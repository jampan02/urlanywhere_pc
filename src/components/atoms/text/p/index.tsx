import React from 'react';
import styles from './style.module.scss';

const P: React.FC = ({ children }) => {
  return (
    <div>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default P;
