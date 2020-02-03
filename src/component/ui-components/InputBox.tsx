import React from 'react';
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

const InputBox: React.FC<any> = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Search Furniture"/>
    </Wrapper>
  );
}

export default InputBox;
