import React from 'react';
import styled from 'styled-components';
import InputBox from './ui-components/InputBox';

const Wrapper = styled.div`
  width: 100%;
  background-color: #0f6cc8;
  padding: 16px;
`;

const SearchBox = () => {
  return (
      <Wrapper>
        <InputBox />
      </Wrapper>
  );
}

export default SearchBox;
