import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default ProductCard;
