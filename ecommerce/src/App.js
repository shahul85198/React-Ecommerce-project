import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from './Constants';

function App() {
  const [products, setproducts] = useState([])

  useEffect(() =>{
      fetch(API_ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log(":: Api endpoints.products ::", res)
       setproducts(res.products)
      })
  }, [])

  return (
    <div className="App">
      <h1>Ecommerce App</h1>
     <AppRouter products={products}/>
    </div>
  );
}

export default App;
