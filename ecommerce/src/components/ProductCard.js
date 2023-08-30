import React from 'react'
import {Link} from 'react-router-dom'
import { useappcontext } from '../contexts/AppProvider'

export default function ProductCard({product}) {

   const {addToCart} = useappcontext()

  return (
    <Link to={`/products/${product.id}`} className='product-card'>
         <img src={product.images[0]} alt={product.title}/>
         <h3>{product.title} {product.id}</h3>
         <p>{product.price}</p>
        
         <button 
         onClick={() => addToCart(product)}
         className='bg-slate-700 text-white px-2 rounded ml-2'>addtoCart</button>
        
      </Link>
   
  )
}
