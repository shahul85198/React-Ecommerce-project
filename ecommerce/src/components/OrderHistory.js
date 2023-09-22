import React from 'react'
//import { useUser } from '../contexts/UserProvider'
//import { Redirect } from 'react-router-dom';

function OrderHistory() {
 // const {user} = useUser();

  //if(!user) return <Redirect to="/login" />

  return (
    <div>OrderHistory</div>
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