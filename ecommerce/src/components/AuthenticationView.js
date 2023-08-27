import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import  {firebaseapp}  from '../firebaseapp'

function AuthenticationView({isLogin}) {

  const [email, setemail] = useState('')
   const [password, setpassword] = useState('')
   const title = isLogin ? 'Login' : 'Sign'

  const handleAuthentication = (event) => {
     const formData = {
      email, //email: email
      password  //password: password both are same
     }
     console.log(":: handleAuthentication ::", title, isLogin, formData)
    event.preventDefault()

    const auth = getAuth(firebaseapp);

    if(isLogin) {
      signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log(":: LOGIN RESPONSE ::", res))
    } else {
     
     createUserWithEmailAndPassword(auth, email, password)
     .then(res => console.log(":: SIGN RESPONSE ::", res))
     .catch(error => console.log(error))
    }

  };

  return (
    <form onSubmit={handleAuthentication} >
      <h2>{title}</h2>
      <input 
      type='email'
       placeholder='Email' 
       value={email}
       onChange={e => setemail(e.target.value)}
       className='border-solid border-2 border-gray-600 m-3'/>
     
      <input
       type='password' 
       placeholder='Password'
       value={password}
       onChange={e => setpassword(e.target.value)}
        className='border-solid border-2 border-gray-600 m-3' />
    
     <button className='bg-gray-600 text-white px-4 rounded m-3'>{title}</button>
    </form>
  )
}

export default AuthenticationView