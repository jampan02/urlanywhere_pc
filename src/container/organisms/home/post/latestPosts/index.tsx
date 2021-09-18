import React from 'react';
import SinglePost from '../../../../../components/molecules/post';
import H2 from '../../../../../components/atoms/text/h2/index';
import { Post } from '../../../../../types/post';
import styles from './style.module.scss';
import ReadMore from '../../../../../components/molecules/readMore';
type Props = {
  posts?: Post[];
  onClick: {
    onOpenEditPostModal: (id: string) => Promise<void>;
    onReadMorePosts: () => void;
  };
};

const LatestUrls: React.FC<Props> = ({ posts, onClick }) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <H2>最近追加されたURL</H2>
      </div>

      {posts &&
        posts.map((post) => (
          <SinglePost
            post={{
              title: post.title,
              url: post.url,
              category: post.category,
              categoryId: post.categoryId,
              updatedAt: post.updatedAt,
              id: post.id,
            }}
            onClick={onClick.onOpenEditPostModal}
          />
        ))}

      <div className={styles.readMoreContainer}>
        <ReadMore onClick={onClick.onReadMorePosts} />
      </div>
    </div>
  );
};

export default LatestUrls;
