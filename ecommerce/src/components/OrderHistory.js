import React, { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {database} from '../firebaseapp'
import PageLayout from './PageLayout'
//import { useUser } from '../contexts/UserProvider'
//import { Redirect } from 'react-router-dom';

function OrderHistory() {
 // const {user} = useUser();
  //if(!user) return <Redirect to="/login" />

  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)  
  useEffect(() => {
    getDocs(collection(database, 'orderHistory'))
    .then(dbCollection => {
      const ordersInDB = [];
      dbCollection.forEach((document) => {
        var orderData = document.data();
        dbCollection.push({...orderData, id: document.id})
      });
      setOrders(ordersInDB);
      setIsLoading(false)
    })
     //.catch(console.log)
    .catch(error => console.log("::OrderHistory -> getDocs ERROR::", error))
  }, [])

  return (
    <PageLayout title={isLoading ? 'Fetching orders...' : `Order History (${orders.length})`}>

<section>
  {orders.map((order, idx) => <div key={order.id} className='mb-8 pb-8 border-b-2'>
        <h3 className='text-lg font-semibold mb-2'>Order #{idx + 1} </h3>
        <ul>
           {order.products.map((product, productIdx) => <li key={productIdx} className='mb-2 pl-4'>
            {product.title} - {product.quantity} × 
           </li>)}
        </ul>
        <p className='text-gray-700 mt-2 text-sm'>
           Shipping Address: {order.address}
        </p>
        <p className='text-gray-700 mt-2'>
          Order Date: {order.createdAt}
        </p>
  </div>)}
</section>
    </PageLayout>
  )
}

export default OrderHistory

/*
  orderhistory
     -> {
      user: UID,
      products: [
        {
          id:1,
          price:1,
          totalamount, 
          quantity,
          title
        }
      ],
      totalamount: 6789,
      createdat: date,
      address
     }


     users 
            [
               {id, name, age}  it will consider as documents in firebase
               {id, name, age}
            ]

            every collections have multiple documents
   addDoc -> collection

   {id, name, age} -> users

*/