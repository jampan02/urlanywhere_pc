import React from 'react';
import { Option } from '../../../types/form';
import { Select } from '../../../types/form/index';

type Props = Select;

const SelectField: React.FC<Props> = ({ options, onChange, value }) => {
  console.log(value);
  const selected = [value.name, value.id].join(',');
  console.log(selected);
  return (
    <div>
      <select value={selected} onChange={onChange}>
        {options.map((option) => (
          //[未分類,Ufue87874g4]みたいな感じになる
          <option value={[option.name, option.id]}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
