import React from 'react';
import './ProductCards.css';
import { Link } from 'react-router-dom';

function ProductCards() {
  const products = [
    { id: 1, Service: 'Emergency care', image: '/drone1.jpg' , location:'/emergency'},
    { id: 2, Service: 'General medical', image: '/drone2.jpg', location: '/generalmedical'},
    { id: 3, Service: 'Channel Your Doctor',image: '/drone3.jpg', location: '/channeldoctor' },
    { id: 4, Service: 'Medical Insurance', image: '/drone4.jpg' , location: '/medicalinsuarance'},
    { id: 5, Service: 'Diagnostic Services', image: '/drone5.jpg' , location: '/diognostic'},
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.Service} className="product-image" />
          <h3>{product.Service}</h3>
          <p>{product.price}</p>
          <button><Link to ={product.location}>Read more</Link></button>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
