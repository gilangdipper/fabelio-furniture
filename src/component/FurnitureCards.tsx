import React, { FC } from 'react';
import styled from 'styled-components';
import Card from './ui-components/Card';

const FrunitureCardsWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-flow: row wrap;

  .card-wrapper {
    flex: 0 0 calc(50% - 8px);
    margin-bottom: 16px;

    &:nth-child(odd) {
      margin-right: 8px;
    }
    &:nth-child(even) {
      margin-left: 8px;
    }
  }
`;

type Props = {
  products: Object[]
};

const FrunitureCards: FC<Props> = ({ products }) => (
  <FrunitureCardsWrapper>
    {products.map((product, index) =>
      <div className="card-wrapper" key={index}>
        <Card {...product} />
      </div>)}
  </FrunitureCardsWrapper>
);

export default FrunitureCards;
