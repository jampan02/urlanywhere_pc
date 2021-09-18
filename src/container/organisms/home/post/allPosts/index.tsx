import React from 'react';
import H1 from '../../../../../components/atoms/text/h1';
import SinglePost from '../../../../../components/molecules/post';
import { Post } from '../../../../../types/post';

type Props = {
  posts: Post[];
  onClick: (id: string) => Promise<void>;
  h1: string;
};

const AllPosts: React.FC<Props> = ({ posts, onClick, h1 }) => {
  return (
    <div>
      <H1>{h1}</H1>
      {posts &&
        posts.map((post) => (
          <SinglePost
            post={{
              title: post.title,
              url: post.url,
              categoryId: post.categoryId,
              category: post.category,
              updatedAt: post.updatedAt,
              id: post.id,
            }}
            onClick={onClick}
          />
        ))}
    </div>
  );
};

export default AllPosts;
