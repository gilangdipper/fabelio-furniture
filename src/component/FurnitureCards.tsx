import React, { FC } from 'react';
import styled from 'styled-components';
import Card from './ui-components/Card';

const FrunitureCardsWrapper = styled.div`
  width: calc(100% - 2px);
  padding: 16px;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid #000000;

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

  @media only screen and (max-width: 425px) {
    border: none;

    .card-wrapper {
      flex: 0 0 100%;

      &:nth-child(n) {
        margin: 0 0 16px 0;
      }
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
