import React from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const SearchPage = () => {
  return (
      <Wrapper>
        <SearchBox />
      </Wrapper>
  );
}

export default SearchPage;
