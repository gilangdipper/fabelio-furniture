import React from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';
import FurnitureCards from '../component/FurnitureCards';

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
      <FurnitureCards />
    </Wrapper>
  );
}

export default SearchPage;
