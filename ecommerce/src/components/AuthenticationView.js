import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/UserProvider';
//import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
//import  {firebaseapp}  from '../firebaseapp'

function AuthenticationView({isLogin}) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  //const [isLoginFailed, setisLoginFailed] = useState(false); // if we provide ! (knot) to false it will change into true
  //const [noUserLogin, setNoUserLogin] = useState(false)
  const title = isLogin ? 'Login' : 'Sign'
  
  const { doLogin, doSignup, error, clearErrors} = useUser()

  const handleAuthentication = (event) => {
    // const formData = {
     // email, //email: email
     // password  //password: password both are same
    // }
    // console.log(":: handleAuthentication ::", title, isLogin, formData)
    event.preventDefault()
    console.log(":: handleAuthentication ::", {doLogin, doSignup, error});
    (isLogin ? doLogin : doSignup)(email, password); // terminator operator use chesaam if(isLogin) {doLogin(email, password)}else {doSignup(email,password)}

   //const auth = getAuth(firebaseapp);

   // if(isLogin) {
      //ikada setisloginfailed manam email password login wrong chesinapudu msg ravadaniki
     /* setisLoginFailed(false)
      setNoUserLogin(false)
      signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log(":: LOGIN RESPONSE ::", res))
      .catch(error => {
        //auth/wrong-password" preti daniki vere ga untundi msg server ki
        if(error.code == "auth/wrong-password") {
          setisLoginFailed(true);
        }

        if(error.code == "auth/user-not-found") {
          setNoUserLogin(true)
        }

      }) */
    
   // } else {
     
    /* createUserWithEmailAndPassword(auth, email, password)
     .then(res => console.log(":: SIGN RESPONSE ::", res))
     .catch(error => console.log(error))
    }  */

  };

   useEffect(() => {}, []) // componentdidmount (invoke only once after mounted)

   useEffect(() => {
     clearErrors()
   }, [isLogin]) // work has componentDidUpdate (invoke whenever islogin prop change)

  return (
    <form onSubmit={handleAuthentication} >
      <h2>{title}</h2>
      {error && <div className='text-red-500 p-2 m-2'>{error}</div>}

     {/* <div className='text-red-500 p-2 m-2'>{isLoginFailed && 'Invalid Login'}</div> */}
     {/* <div className='text-red-500 p-2 m-2'>{noUserLogin && 'User not founnd'}</div>  */}

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

export default AuthenticationView;