import React from "react";
import "./App.css";

class productList extends React.Component{
  render(){
    return(
      <h1>Produc List</h1>
    );
  }
}

function App() {
  return (
    <div>
      <productList />
    </div>
  );
}

export default App;
