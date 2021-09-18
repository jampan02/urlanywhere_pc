import React from 'react';
import { Link } from 'react-router-dom';
import CircleButton from '../../atoms/button/circleButton';
import { Category } from '../../../types/category';
import Span from '../../atoms/text/span';
import styles from './style.module.scss';
const categoryImage = require('../../../images/png/home/catgory/category.png').default;

type Props = {
  category: Category;
  onClick: (id: string) => Promise<void>;
};

const SingleCategory: React.FC<Props> = ({ category, onClick }) => {
  const { name, id } = category;
  return (
    <div className={styles.container}>
      <Link to={`/posts/category/${id}`}>
        <div className={styles.titleWrapper}>
          <img src={categoryImage} className={styles.image} />
          <div className={styles.title}>
            <Span>{name}</Span>
          </div>
        </div>
      </Link>
      <div className={styles.buttonContainer}>
        <CircleButton onClick={() => onClick(id)}>
          <i className="fas fa-pencil-alt"></i>
        </CircleButton>
      </div>
    </div>
  );
};

export default SingleCategory;
