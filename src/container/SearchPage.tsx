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

type Props = {
  products: Object[],
  furnitureStyles: string[]
}

const SearchPage: React.FC<Props> = ({ products, furnitureStyles }) => {
  return (
    <Wrapper>
      <SearchBox furnitureStyles={furnitureStyles} />
      <FurnitureCards products={products} />
    </Wrapper>
  );
}

export default SearchPage;
