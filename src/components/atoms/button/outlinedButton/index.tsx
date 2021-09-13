import React from 'react';
import styles from './style.module.scss';
type Props = {
  onClick: () => void;
  icon?: {
    src: string;
    alt: string;
  };
};

const OutLinedButton: React.FC<Props> = ({ onClick, icon, children }) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick}>
        {icon && <img className={styles.icon} src={icon.src} alt={icon.alt} />}
        {children}
      </button>
    </div>
  );
};

export default OutLinedButton;
