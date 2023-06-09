import React from 'react';
import './Product.css';

function Product(props) {
  return (
    <div className="item">
      <div className="image">
        <img src={props.productImageUrl} alt="item" />
      </div>
      <div className="content">
        <span>Title: {props.title}</span>
        <span>Description: {props.description}</span>
        <span className='auth-img'>
          <span>Submitted By: </span>
          <img src={props.submitterAvatarUrl} alt="avthar" />
          <span>Votes:{props.votes}</span>
        </span>
      </div>
    </div>
  );
}

export default Product;
