import React from 'react';
import styles from './style.module.scss';

type Props = {
  onClick: () => void;
};

const ArrowRight: React.FC<Props> = ({ onClick }) => {
  return <div onClick={onClick} className={styles.container}></div>;
};

export default ArrowRight;
