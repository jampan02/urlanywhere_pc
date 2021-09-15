import React from 'react';
import Content from '../../../../components/molecules/home/content';
import H2 from '../../../../components/atoms/text/h2/index';
import { Post } from '../../../../types/post';

type Props = {
  posts?: Post[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  submit: () => void;
};

const LatestUrls: React.FC<Props> = ({ posts, setValue, value, submit }) => {
  return (
    <div>
      <H2>最近追加されたURL</H2>
      {posts &&
        posts.map((post) => <Content title={post.title} url={post.url} category={post.category} />)}
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={submit}>x</button>
    </div>
  );
};

export default LatestUrls;
