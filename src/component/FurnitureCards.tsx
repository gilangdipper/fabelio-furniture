import React from 'react';
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

const products = [
  {
    name: "Sofa L Jobi",
    description: "Selama Anda dapat berkumpul bersama keluarga dan orang-orang terdekat, duduk di manapun mungkin rasanya tidak menjadi masalah untuk Anda. Akan tetapi, dengan berkumpul bersama menggunakan Jobi L Sofa, suasana quality time Anda akan terasa 180 derajat perubahannya.",
    furniture_style: [
    "Classic",
    "Midcentury"
    ],
    delivery_time: "14",
    price: 5000000
    },
    {
    name: "Sofa L Vienna",
    description: "Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.",
    furniture_style: [
    "Midcentury",
    "Contemporary"
    ],
    delivery_time: "2",
    price: 7999000
    },
    {
    name: "Sofa L Arsa Wooden Leg",
    description: "Arsa 'L' Sofa dengan kaki kayu adalah gabungan dari sofa 2 seater dan 1 sofa memanjang yang cocok ditaruh ditengah maupun dipojok ruangan anda. Keseluruhan sofa didominasi oleh bantalan dengan busa khusus indoor dengan aksen kaki kayu. Cushion isi dacron yang ditambahkan pada sandaran punggung sofa menambah kenyamanan. Jangan heran bila Anda mudah terlelap di atas sofa ini.",
    furniture_style: [
    "Scandinavian",
    "Modern"
    ],
    delivery_time: "7",
    price: 9499000
    }
];

const FrunitureCards: React.FC<any> = () => {
  return (
    <FrunitureCardsWrapper>
      {products.map(product =>
        <div className="card-wrapper">
          <Card {...product} />
        </div>)}
    </FrunitureCardsWrapper>
  );
}

export default FrunitureCards;
