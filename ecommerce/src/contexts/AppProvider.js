/*
to avoide prop drilling we use context

*/

import React, {createContext, useContext, useEffect, useState} from 'react'
import { API_ENDPOINTS } from '../Constants'

export const AppContext = createContext({
    products: [],
    loading: true
})

const CART_PRODUCTS = "CART_PRODUCTS";
const localCartItems = localStorage.getItem(CART_PRODUCTS);
const parseLocalCartItems = JSON.parse(localCartItems ? localCartItems : "{}")


function AppProvider({children}) {
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)
  //const [cartitems, setcartitems] = useState([])
  const [cartProducts, setCartProduct] = useState({parseLocalCartItems})
  // const [cartitems, setcartitems] = useState([])


  useEffect(() => {
      fetch(API_ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log(":: Api endpoints.products ::", res)
       setproducts(res.products)
      })
  }, [])

  
   /* let addedProduct = cartitems.find(cartProduct => cartProduct.id == product.id)

    if(!addedProduct) {
      addedProduct = product
      addedProduct.quantity = 1;
    } else {
      addedProduct.quantity++;
      }
      const filterproducts = cartitems.filter(cartProduct => cartProduct.id != product.id)
    setcartitems([...filterproducts, addedProduct])
  */

    const addProductToCart = (product) => {
  let cartProduct = cartProducts[product.id]
  if(!cartProduct) {
    cartProduct = product
    cartProduct.quantity = 1;
  } else {
    cartProduct.quantity++
  }

  cartProduct.totalPrice = cartProduct.quantity * cartProduct.price;

  setCartProduct({...cartProducts, [product.id] : cartProduct})
  }

  useEffect(() => {
    localStorage.setItem(CART_PRODUCTS, JSON.stringify(cartProducts));
  }, [cartProducts])

 /* const addToCart = (Product) => {
    setcartitems([...cartitems, Product])
  } */


  const clearCart = () => {
    setCartProduct({})
  }

   const productById = {}
   products.forEach((product) => {
    productById[product.id] = product;
   })

    const allcartProducts = Object.values(cartProducts)
    const cartCount = allcartProducts.length;
    let totalCartAmount = 0;
    allcartProducts.forEach(product => {
      totalCartAmount = totalCartAmount + product.totalPrice
    })

  return (
    
    <AppContext.Provider value={({
      products,
      productById,
      loading,
      setloading,
      cartCount,
     // cartitems,     // [{id: 1}, {id: 2}]
      cartProducts,  // {1: {id:1}, 2: {id:2}}
      clearCart,
      addProductToCart,
      allcartProducts,
      totalCartAmount
     // cartitems,
     // addToCart
    })}>

      {children}

    </AppContext.Provider>
  )
}

 export const useAppContext = () => useContext(AppContext);

export default AppProvider



/*
  const {products, loading, seetloading} = usseContext()
  ikada ila detructuring jarugutundi 
  usecontext lo e vaaluues untai 
*/