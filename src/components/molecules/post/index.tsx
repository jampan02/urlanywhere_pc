import React, { useEffect } from 'react';
import UrlMark from '../../atoms/mark/urlMark/index';
import P from '../../atoms/text/p/index';
import NavigateLink from '../../atoms/link/navigateLink/index';
import Span from '../../atoms/text/span';
import { Post } from '../../../types/post';
import styles from './style.module.scss';
import ImageButton from '../../atoms/button/imageButton/index';
import CircleButton from '../../atoms/button/circleButton';
import { useState } from 'react';

type Props = {
  post: Post;
  onClick: (id: string) => Promise<void>;
};

const SinglePost: React.FC<Props> = ({ post, onClick }) => {
  const { title, category, url, updatedAt, id } = post;

  const [difference, setDifference] = useState(0);
  useEffect(() => {
    const currentTime = new Date().getTime();

    const updatePostTime = updatedAt?.toDate().getTime();
    const time = updatePostTime - currentTime;
    console.log(updatePostTime);
    setDifference((Math.floor(time / 1000 / 60) % 60) * -1);
    //difference = difference * -1;
    console.log('dif=', difference);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <UrlMark />
        <div className={styles.title}>
          <NavigateLink targetBlank href={url}>
            {title}
          </NavigateLink>
        </div>

        <Span>({category})</Span>
      </div>

      <div className={styles.timeContainer}>
        <Span>{difference}分前</Span>
        <div className={styles.buttonContainer}>
          <CircleButton onClick={() => onClick(id)}>
            <i className="fas fa-pencil-alt"></i>
          </CircleButton>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
