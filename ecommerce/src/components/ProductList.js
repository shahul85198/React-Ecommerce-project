import React from 'react'
import ProductCard from './ProductCard'
import { useappcontext } from '../contexts/AppProvider'

export default function ProductList() {
  const {products} = useappcontext()

  const addtoCart = (product) => {
    setcartitems([...cartitems, product]);
  };
  

  console.log(":: productslist -> products ::", products)
  return (
    <div>
    <h3>Products</h3>
    <div className='product-list'>
      {products.map(product => <ProductCard key={product.id} product={product} addtoCart={addtoCart}/> )}
     
      </div>
      </div>
  )
}


/*
 temp1.filter((products) => products.id == 2)
 //output -- {}

 manam item ni pickup chaiyali anty 

 var product =temp1.filter((product) => product.id == 2)
 // output -- 1st item of product

manam vaka value kosam ity find apply chaivachu if we use filter multiple values read chese avakasam untundi

 temp1.find((products) => products.id == 2)

*/



/*

  [2,3,4].map(() => {return 100})
  //output-- [100,100,100]


  [2,3,4].map((v) => {return v * 100})
  //output-- [200,300,400]

*/