import React from 'react';
import H2 from '../../../../../components/atoms/text/h2';
import SingleCategory from '../../../../../components/molecules/category';
import { Category } from '../../../../../types/category';
import styles from './style.module.scss';
type Props = {
  categories: Category[];
  onClick: (id: string) => Promise<void>;
};

const LatestCategories: React.FC<Props> = ({ categories, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <H2>最近使われたカテゴリー</H2>
      </div>
      <div className={styles.categoriesContainer}>
        {categories[0] &&
          categories.map((category) => <SingleCategory category={category} onClick={onClick} />)}
      </div>
    </div>
  );
};

export default LatestCategories;
