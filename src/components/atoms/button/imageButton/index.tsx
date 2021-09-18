import React from 'react';
import styles from './style.module.scss';
type Props = {
  onClick: () => void;
};

const ImageButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default ImageButton;
