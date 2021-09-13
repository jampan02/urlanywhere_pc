import React, { useEffect, useState } from 'react';
import H1 from '../../../components/atoms/text/h1';
import styles from './style.module.scss';
const slideImages: any[] = [
  require('../../../images/png/sign/slideShow/one.jpg').default,
  require('../../../images/png/sign/slideShow/two.jpg').default,
  require('../../../images/png/sign/slideShow/three.jpg').default,
  require('../../../images/png/sign/slideShow/four.jpg').default,
  require('../../../images/png/sign/slideShow/five.jpg').default,
];

const SignTemplate: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  let slideImage = slideImages[count];
  if (count === 5) {
    setCount(0);
  }
  const onSlideBackgroundImage = () => {
    setInterval(() => {
      if (slideImage === slideImage[4]) {
        console.log('last');
        setCount(0);
      } else {
        console.log('increment');
        setCount((prev) => prev + 1);
      }
    }, 3000);
  };

  useEffect(() => {
    onSlideBackgroundImage();
  }, []);
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${slideImage})` }}>
      <div className={styles.title}>
        <H1>いつでも、どこでも繋がれる</H1>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SignTemplate;
