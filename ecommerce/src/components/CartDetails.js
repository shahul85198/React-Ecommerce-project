
import React, { Component } from 'react'
import {AppContext} from '../contexts/AppProvider'
import UIButton from './UIButton';
import { CartItem } from './CartItem';
import PageLayout from './PageLayout';


export class CartDetails extends Component {
  gotoCheckout = () => {
    this.props.history.push('/checkout')
  }

  render() {
    console.log(":: CartDetails ::", this.props)
    return (
       <PageLayout title={'Cart Details'}>
<AppContext.Consumer>
  {({allcartProducts, totalCartAmount}) => {

    return allcartProducts.length > 0 ?  <div>
       {allcartProducts.map((product) => <CartItem key={product.id} product={product} />)}
        <h3 className='text-lg font-semibold mt-4'>Total price: {totalCartAmount} </h3>
        <UIButton onClick={this.gotoCheckout}>Proceed to checkout</UIButton>
      </div> : <p>your cart is empty.</p>
  }}
</AppContext.Consumer>
</PageLayout>
 

)
}
}


export default CartDetails


/*
 /*   <h2>Cart Items</h2>

        <AppContext.Consumer>
           {(cartItems) => <table>
            <thead>
              <tr>
                 <th>Product Name</th>
                 <th>Quantity</th>
                 <th>Per Price</th>
                 <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * item.price}</td>
              </tr>)}

            </tbody>
              
            </table>}
        </AppContext.Consumer>
<hr />
              */





/* <AppContext.Consumer>
   {({cartProducts}) => <table>
    <thead>
      <tr>
         <th>Product Name</th>
         <th>Quantity</th>
         <th>Per Price</th>
         <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(cartProducts).map(item => <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.quantity * item.price}</td>
      </tr>)}
      
    </tbody>
      
    </table>}
</AppContext.Consumer>

      </section> */
    


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
