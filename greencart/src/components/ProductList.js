import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const products = useSelector((state) => state.products);
  
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
