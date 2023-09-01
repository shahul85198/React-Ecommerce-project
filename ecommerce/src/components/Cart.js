

/* 

import React from 'react'
import { useappcontext } from '../contexts/AppProvider'
import { Link } from 'react-router-dom'
function Cart() {

    const { cartitems} = useappcontext();

  return (
    <div>
    {cartitems.map((product) => (
     <div key={product.id} className='product-card'>
      <Link to={`/products/${product.id}`}>
          <img src={product.images[0]} alt={product.title} />
       <h3>{product.title} {product.id}</h3>
          <p>{product.price}</p>
          </Link>
        </div>
         ))}
        </div>
    );
}


export default Cart;


*/
