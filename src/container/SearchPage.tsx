import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';
import FurnitureCards from '../component/FurnitureCards';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const DELIVERY_TIME_CALC_MAP = {
  "one-week": (time) => time <= 7,
  "two-weeks": (time) => time <= 14 && time > 7,
  "one-month": (time) => time <= 30 && time > 14,
  "more": (time) => time > 30
};

const isEqual = (firstValue, secondValue) =>
  JSON.stringify(firstValue) === JSON.stringify(secondValue);

const getFilterKeys = (filters, filterName) => 
  Object.keys(filters[filterName]).filter(item => filters[filterName][item]);

const getProductsFiltered = (filters, prevFilters, products) => {
  if (!isEqual(filters, prevFilters) && prevFilters !== undefined) {
    if (filters.search.length > 0) {
      products = products.filter(({ name }) => name.includes(filters.search))
    }

    const furnitureStyleKeys = getFilterKeys(filters, "furnitureStyle");
    if (furnitureStyleKeys.length > 0) {
      products = products.filter(({ furniture_style }) =>
        furniture_style.some(item => furnitureStyleKeys.includes(item)));
    }

    const deliveryTimeKeys = getFilterKeys(filters, "deliveryTime");
    if (deliveryTimeKeys.length > 0) {
      products = products.filter(({ delivery_time }) =>
        deliveryTimeKeys.some(item =>
          DELIVERY_TIME_CALC_MAP[item](parseInt(delivery_time))));
    }
  }

  return products;
};

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const defaultFilters = {
  search: "",
  furnitureStyle: {},
  deliveryTime: {}
};

const SearchPage: FC<any> = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [products, setProducts] = useState([]);
  const [furnitureStyles, setFurnitureStyles] = useState([]);
  const prevFiltersState = usePrevious(filters);
  const productsFiltered = getProductsFiltered(filters, prevFiltersState, products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.mocky.io/v2/5c9105cb330000112b649af8,'
        );
        const result = await response.json();

        setProducts(result.products);
        setFurnitureStyles(result.furniture_styles);
      } catch(error) {
        setProducts([]);
        setFurnitureStyles([]);
      }
    };

    fetchData();
  }, []);
  
  return (
    <Wrapper>
      <SearchBox
        furnitureStyles={furnitureStyles}
        filters={filters}
        setFilters={setFilters}
      />
      <FurnitureCards products={productsFiltered} />
    </Wrapper>
  );
}

export default SearchPage;
