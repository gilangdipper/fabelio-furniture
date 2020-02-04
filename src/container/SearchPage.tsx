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

type Props = {
  products: Object[],
  furnitureStyles: string[]
};

const SearchPage: FC<Props> = ({ products, furnitureStyles }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const prevFiltersState = usePrevious(filters);
  const productsFiltered = getProductsFiltered(filters, prevFiltersState, products);  
  
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
