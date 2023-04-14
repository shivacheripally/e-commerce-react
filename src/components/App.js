import React from 'react';
import Product from './Product.js';
import items from './data.js';
import './App.css';
// console.log(items[0]);
class ProductList extends React.Component {
  render() {

    const products = items.sort((a,b) => {
      return b.votes - a.votes;
    });
    
    const productComponents = products.map((product,index) => (
      <Product key={`product-${index}`} {...product}/>
    ));

    return <div>{productComponents}</div>
  }
}

function App() {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
