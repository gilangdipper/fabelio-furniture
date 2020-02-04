import React, { FC } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-radius: 2px;
  width: auto;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  padding: 16px;

  .product-name {
    flex: 0 0 70%;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .product-price {
    flex: 0 0 30%;
    color: #ff9a07;
    font-size: 14px;
  }
  .product-description {
    flex: 0 0 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #626262;
    font-size: 12px;
    margin-bottom: 8px;
  }
  .product-style {
    flex: 0 0 100%;
    font-size: 14px;
    color: #6aa2dc;
    margin-bottom: 8px;
  }
  .product-delivery-time {
    flex: 0 0 100%;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
    color: #0e6cc8;
    text-align: right;
  }
`;

type Props = {
  name: string,
  price: string,
  description: string,
  furniture_style: string[],
  delivery_time: string
};

const Card: FC<Props> = ({ 
  name,
  price,
  description,
  furniture_style,
  delivery_time
}) => (
  <CardWrapper>
    <div className="product-name">{name}</div>
    <div className="product-price">{`IDR ${price}`}</div>
    <div className="product-description">{description}</div>
    <div className="product-style">{furniture_style.join(', ')}</div>
    <div className="product-delivery-time">{`${delivery_time} days`}</div>
  </CardWrapper>
);

export default Card;
