import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  background-color: #0f6cc8;

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #94a8bf;
    padding-bottom: 8px;

    &::placeholder {
      color: #ffffff;
    }
    
    &:focus {
      outline: none;
    }
  }
`;

type Props = {
  placeholder: string,
  value: string,
  onChange: () => void
};

const InputBox: FC<Props> = ({ placeholder, value, onChange }) => (
  <Wrapper>
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </Wrapper>
);

export default InputBox;
