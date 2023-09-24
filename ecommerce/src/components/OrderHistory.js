import React, { useEffect, useState, useUser } from 'react'
import {collection, getDocs, query, orderBy, where} from 'firebase/firestore'
import {database} from '../firebaseapp'
import PageLayout from './PageLayout'
//import { useUser } from '../contexts/UserProvider'
//import { Redirect } from 'react-router-dom';

function OrderHistory() {
 // const {user} = useUser();
  //if(!user) return <Redirect to="/login" />

  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {user} = useUser()  

  useEffect(() => {
    const orderCollection = collection(database, "orderHistory");
    const ordersQuery = query(
      orderCollection, 
      where("userEmail", "==", user.email),
      orderBy("createdAt", 'asc') // 'desc' | 'asc'
        ) 
    
    getDocs(ordersQuery)
    .then(dbCollection => {
      const ordersInDB = [];
      dbCollection.forEach((document) => {
        var orderData = document.data();
        dbCollection.push({...orderData, id: document.id})
      });
      setOrders(ordersInDB) //.sort((a,b) => a.createdAt > b.createdAt ? -1 : 1)
      setIsLoading(false)
    })
     //.catch(console.log)
    .catch(error => console.log("::OrderHistory -> getDocs ERROR::", error))
  }, [user.email])

  return (
    <PageLayout title={isLoading ? 'Fetching orders...' : `Order History (${orders.length})`}>

<section>
  {orders.map((order, idx) => <div key={order.id} className='mb-8 pb-8 border-b-2'>
        <h3 className='text-lg font-semibold mb-2'>Order #{idx + 1} | INR {order.totalAmount} </h3>
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


   ## this is used to arrange the numbers in a correct order
   [26946306318].sort()


   ## object lo unna key ni base chesukoni sort chaiyali
   [{price:2} {price: 4} {price:1} {price:3}]


   var data = (new Array(50)).fill(1).map(a => Math.floor(Math.random()*100))

   data was not in sort means output

   data.sort(function(a,b) {
    return a > b -1 : 1
   })

   // output will be in decending order

   data.sort(function(a,b) {
    return a > b ? 1 : -1
   })

   // output will be in ascending order(order)


   var prices =  [{price:2} {price: 4} {price:1} {price:3}].sort()

   prices.sort((a,b) => a.price > b.price ? -1 : 1)

   prices.sort((a,b) => a.price > b.price ? 1 : -1)



   */