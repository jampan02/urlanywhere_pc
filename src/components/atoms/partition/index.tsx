import React from 'react';
import styles from './style.module.scss';
const Partition: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Partition;
