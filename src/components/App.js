import React from "react";
import "./App.css";

class ProductList extends React.Component{
  render(){
    return(
      <h1>Product List</h1>
    );
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
