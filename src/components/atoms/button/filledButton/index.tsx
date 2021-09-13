import React from 'react';
import styles from './style.module.scss';
type Props = {
  onClick: () => void;
  icon?: {
    src: string;
    alt: string;
  };
};
const FilledButton: React.FC<Props> = ({ onClick, icon, children }) => {
  return (
    <div className={styles.container}>
      {icon && <img src={icon.src} alt={icon.alt} />}
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default FilledButton;
