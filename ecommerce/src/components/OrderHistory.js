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
        dbCollection.push(orderData)
      });
      setOrders(ordersInDB)
      setIsLoading(false)
    })
     //.catch(console.log)
    .catch(error => console.log("::OrderHistory -> getDocs ERROR::", error))
  }, [])

  return (
    <PageLayout title={isLoading ? 'Fetching orders...' : `Order History (${orders.length})`}>

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