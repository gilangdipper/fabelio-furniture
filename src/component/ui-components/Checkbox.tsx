import React from 'react';

type Props = {
  name: string,
  checked: boolean,
  onChange: () => void
};

const Checkbox: React.FC<Props> = ({ name, checked = false, onChange }) => (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} />
);

export default Checkbox;
