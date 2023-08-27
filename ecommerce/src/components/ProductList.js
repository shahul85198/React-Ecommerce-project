import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products}) {
  console.log(":: productslist -> products ::", products)
  return (
    <div>
    <h3>Products</h3>
    <div className='product-list'>
      {products.map(product => <ProductCard key={product.id} product={product}/> )}
      </div>
      </div>
  )
}


/*

  [2,3,4].map(() => {return 100})
  //output-- [100,100,100]


  [2,3,4].map((v) => {return v * 100})
  //output-- [200,300,400]

*/