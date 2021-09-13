import React from 'react';
import styles from './style.module.scss';
type Props = {
  href: string;
};

const NavigateLink: React.FC<Props> = ({ href, children }) => {
  return (
    <div className={styles.container}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default NavigateLink;
