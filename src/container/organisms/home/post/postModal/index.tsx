import React from 'react';
import { PostModalProps } from '../../../../../types/form';
import PostForm from '../../../../../components/molecules/post/form/';
import P from '../../../../../components/atoms/text/p';
type Props = {
  post: PostModalProps;
  title: string;
  edit?: boolean;
};

const PostModal: React.FC<Props> = ({ post, title, edit }) => {
  const { url, select, onSubmit } = post;
  return (
    <div>
      <P>{title}</P>

      <PostForm url={url} select={select} edit={edit} onSubmit={onSubmit} />
    </div>
  );
};

export default PostModal;
