import React from 'react';
import UrlMark from '../../../atoms/mark/urlMark/index';
import P from '../../../atoms/text/p/index';
import NavigateLink from '../../../atoms/link/navigateLink/index';
import Span from '../../../atoms/text/span';
import { Post } from '../../../../types/post';

type Props = Post;

const Content: React.FC<Props> = ({ title, category, url }) => {
  return (
    <div>
      <UrlMark />
      <div>
        <NavigateLink targetBlank href={url}>
          {title}
        </NavigateLink>
        <Span>({category})</Span>
      </div>
    </div>
  );
};

export default Content;
