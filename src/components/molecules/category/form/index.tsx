import { url } from 'inspector';
import React from 'react';
import OutLinedButton from '../../../atoms/button/outlinedButton';
import OutLinedTextField from '../../../atoms/textField/outlinedTextField';
import { CategoryModalProps } from '../../../../types/form';

type Props = CategoryModalProps;

const CategoryForm: React.FC<Props> = ({ name, edit, onSubmit }) => {
  return (
    <div>
      <OutLinedTextField value={name.value} setValue={name.setValue} placeholder="カテゴリー名" />
      <OutLinedButton onClick={onSubmit}>{edit ? '編集' : '追加'}</OutLinedButton>
    </div>
  );
};

export default CategoryForm;
