import React from 'react';
import styles from './style.module.scss';

const Span: React.FC = ({ children }) => {
  return (
    <div>
      <span>{children}</span>
    </div>
  );
};

export default Span;
