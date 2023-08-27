import React from 'react'

export default function ProductDetails({match, ...props}) {
  const {params} = match
  const {id} = params
  return (
    <>
    <div>ProductDetails: {id}</div>
   { /*<pre>{JSON.stringify(params, null, 2)}</pre>*/}
    </>
  )
}

/*
   here match is used to catch the id number or item number to notify in product details
   for this we use match method 
   and we destruture match
   and again we detructurre params 
   and we js the id to product details

*/