import React from 'react';
import './ProductCards.css';
import { Link } from 'react-router-dom';
import emergency from'../assets/emergencyt.jpg';
import pharmacy from '../assets/online-pharmacy.jpg';
import doctor from '../assets/personal-doctor.jpg';
import healthInsuarance from '../assets/health-insurance.jpg';
import diagnoise from '../assets/doctor-consultation.jpg';

function ProductCards() {
  const products = [
    { id: 1, Service: 'Emergency care', image: emergency , location:'/emergency'},
    { id: 2, Service: 'Online Pharmacy', image: pharmacy, location: '/pharmacy'},
    { id: 3, Service: 'Channel Your Doctor',image: doctor, location: '/channeldoctor' },
    { id: 4, Service: 'Medical Insurance', image: healthInsuarance , location: '/medicalinsuarance'},
    { id: 5, Service: 'Diagnostic Services', image: diagnoise, location: '/diognostic'},
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.Service} className="product-image" />
          <h3>{product.Service}</h3>
          <p>{product.price}</p>
          <button className='btn'><Link to ={product.location} className='lnk'>Read more</Link></button>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
