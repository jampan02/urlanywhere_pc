import React from 'react';
import ArrowBottom from '../../atoms/arrow/bottom';
import styles from './style.module.scss';

type Props = {
  onClick: () => void;
};

const ReadMore: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.arrowContainer}>
        <ArrowBottom />
      </div>
    </div>
  );
};

export default ReadMore;
