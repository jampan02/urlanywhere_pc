import React from 'react';
import OutLinedTextField from '../../../atoms/textField/outlinedTextField/index';
import OutLinedButton from '../../../atoms/button/outlinedButton/index';
import { Button, PostModalProps, Select, TextField } from '../../../../types/form';
import SelectField from '../../../atoms/SelectField';

type Props = PostModalProps;

const PostForm: React.FC<Props> = ({ url, select, edit, onSubmit }) => {
  return (
    <div>
      <OutLinedTextField value={url.value} setValue={url.setValue} placeholder="サイトURL" />
      <SelectField onChange={select.onChange} options={select.options} value={select.value} />

      <OutLinedButton onClick={onSubmit}>{edit ? '編集' : '追加'}</OutLinedButton>
    </div>
  );
};

export default PostForm;
