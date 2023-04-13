import React from 'react';
import Product from './Product.js';
import products from './data.js';
import './App.css';
class ProductList extends React.Component {
  render() {
    const productComponents = products.map((product) => (
      <Product title={product.title}/>
    ));
  }
}

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
