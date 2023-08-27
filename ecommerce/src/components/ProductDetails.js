import React from 'react'
import { useappcontext } from '../contexts/AppProvider';
import ProductCard from './ProductCard';

export default function ProductDetails({match, ...props}) {
  const {params} = match;
  const {id} = params;

  const {products} = useappcontext()
  const product = products.find(prod => prod.id == id)

  if(!product) return <h1>No product found...</h1>

  return (
    <>
    <div>
      ProductDetails: {id}
        <ProductCard product={product}/>

     {/* <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3> */}
    </div>
   { /*<pre>{JSON.stringify(params, null, 2)}</pre>*/}
    </>
  )
}

/*
  manaki undefine value vachindi anty apudu manam not[!] use chesty apudu manaki return iyedi true
  (!product)

*/



/*
   here match is used to catch the id number or item number to notify in product details
   for this we use match method 
   and we destruture match
   and again we detructurre params 
   and we js the id to product details

*/