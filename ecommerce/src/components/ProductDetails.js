import React from 'react'
import { useAppContext } from '../contexts/AppProvider';
//import ProductCard from './ProductCard';
import UIButton from './UIButton'

export default function ProductDetails({match, ...props}) {
  const {params} = match;
  const {id} = params;

  const {productById, addProductToCart, cartProducts} = useAppContext()
  //const product = products.find(prod => prod.id == id)
   const product = productById[id];
   const cartProductInfo = cartProducts[id]

  if(!product) return <h1>No product found...</h1>

  const {images, title, description, price} = product;
  const [ productMainImage ] = images;

  const addToCart = () => {
    addProductToCart(product);
  }

  return (
    <>
    <div className='container mx-auto px-4 py-6'>
      <div className='flex'>  
        <img src={productMainImage} alt={title} className='w-1/3 rounded-lg transition-shadow'/>

        <div className='w-2/3'>
          <h2 className='text-2xl font-semibold'>{title} | {cartProductInfo ? cartProductInfo.quantity : 0}</h2>
          <p className='mt-2 text-gray-700'>{description}</p>
          <p className='mt-4 text-2xl'>${price}</p>
          <UIButton onClick={addToCart}>Add to Cart</UIButton> 
        </div>

     {/* ProductDetails: {id}
        <ProductCard product={product}/> */}

     {/* <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3> */}
    </div>

    <div className='flex gap-2 mt-4'>
      {images.map(imageUrl => <div key={imageUrl} className='w-1/5'>
      <img 
      className='w-full rounded border object-cover'
      src={imageUrl}     
      alt="Product" 
      />
      </div>
      )}
    </div>
   { /*<pre>{JSON.stringify(params, null, 2)}</pre>*/}
   </div>
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