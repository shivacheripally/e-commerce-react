import React from 'react';
import Product from './Product.js';
import items from './data.js';
import './App.css';
// console.log(items[0]);
class ProductList extends React.Component {
  render() {

    items = items.sort((a,b) => {
      b.votes - a.votes;
    });
    
    const productComponents = items.map((item) => (
      <Product {...item}/>
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
