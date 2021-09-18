import React from 'react';
import P from '../../../../../components/atoms/text/p';
import CategoryForm from '../../../../../components/molecules/category/form/';
import { CategoryModalProps } from '../../../../../types/form';
import styles from './style.module.scss';
type Props = {
  category: CategoryModalProps;
  title: string;
  edit?: boolean;
};

const CategoryModal: React.FC<Props> = ({ category, title, edit }) => {
  const { name, onSubmit } = category;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <P>{title}</P>
      </div>
      <div>
        <CategoryForm
          name={{ value: name.value, setValue: name.setValue }}
          edit={edit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default CategoryModal;
