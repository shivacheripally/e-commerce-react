import React from 'react';
import './Product.css';

function Product(props) {
  console.log(props.title);
  return (
    <div className="item">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="content">
        <span>Title: </span>
        <span>Description: </span>
        <span className='auth-img'>
          <p>Submitted By:</p>
          <img src="" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Product;
