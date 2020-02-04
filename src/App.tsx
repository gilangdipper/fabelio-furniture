import React, { useEffect, useState } from 'react';
import SearchPage from './container/SearchPage';

const App: React.FC<any> = () => {
  const [products, setProducts] = useState([]);
  const [furnitureStyles, setFurnitureStyles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://www.mocky.io/v2/5c9105cb330000112b649af8,'
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
  }, [products, furnitureStyles]);

  return (
    <SearchPage products={products} furnitureStyles={furnitureStyles}/>
  );
}

export default App;
