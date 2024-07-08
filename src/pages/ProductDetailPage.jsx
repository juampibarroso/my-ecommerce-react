import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(productId));
        setProduct(foundProduct);
      });
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ProductDetailPage;
