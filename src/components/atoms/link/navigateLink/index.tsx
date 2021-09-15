import React from 'react';
import styles from './style.module.scss';
type Props = {
  href: string;
  targetBlank?: boolean;
};

const NavigateLink: React.FC<Props> = ({ href, children }) => {
  return (
    <div className={styles.container}>
      <a target="_blank" href={href}>
        {children}
      </a>
    </div>
  );
};

export default NavigateLink;
