import React, { useState }  from 'react';
import { useUser } from '../contexts/UserProvider';
import UITextField from './UITextField';
import UIButton from './UIButton';
import {useappcontext} from '../contexts/AppProvider';
import { database } from '../firebaseapp';
import { collection, addDoc } from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import PageLayout from './PageLayout';

//import { useUser } from '../contexts/UserProvider';
//import { useHistory, Redirect } from 'react-router-dom';

export default function Checkout() {
     // const { user } = useUser()
     /* const history = useHistory()

      useEffect(() => {
        if(!user) {
                history.push("/")
        }
      }, [user])

          [ or ]


    if(!user) {
      return <Redirect to="/login" />
    }
*/

      const {user} = useUser();
      const history = useHistory()
      const {allcartProducts, totalCartAmount, clearCart} = useappcontext();
      const [address, setAddress] = useState('')
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(":: Checkout -> handleSubmit::", {allcartProducts, totalCartAmount, user, address});

        const products = allcartProducts.map(product => {
          return {
          id: product.id,
          quantity: product.quantity,
          title: product.title,
          price: product.price,
          totalPrice: product.totalPrice,
          }
        })

        const saveOrder = {
          userId: user.uid,
          userEmail: user.email,
          address,
          products,
          totalAmount: totalCartAmount,
          createdAt:(new Date()).toLocaleString()
        }

        addDoc(
          collection(database, "orderHistory"), 
          saveOrder
          ).then((docRef) => {
            console.log(":: orderHistory -> save ::", docRef)
            clearCart()
            history.push('/products')
          })
          .catch(error => {
            console.log(":: orderHistory -> ERROR ::", error)
          })

          console.log(":: Checkout -> handleSubmit -> saveOrder ::", saveOrder)
      }

    return <PageLayout title={'Checkout'}>
      <form onSubmit={handleSubmit}>
        <UITextField placeholder='Email' value={user.email} readOnlys/>
       <UITextField placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
       <UIButton disabled={!address || address.length < 10}>Submit</UIButton>
      </form>
      </PageLayout>
    
}



/*
 HOC (higher order component)
 (Component) -> () => <Component />
 */