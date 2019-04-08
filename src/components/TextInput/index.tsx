import * as React from 'react';

const style = require('./style.scss');

interface ITextInputProps {
  label?: string,
  placeholder?: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
}

export const TextInput: React.FunctionComponent<ITextInputProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
}) => (
  <div className={style.wrapper}>
    {
      label &&
      <div className={style.label}>{label}</div>
    }
    <input
      type="text"
      onChange={onChange}
      className={style.input}
      placeholder={placeholder}
      value={value}
    />
  </div>
);
