import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/UserProvider';
import UITextField from './UITextField';
import UIButton from './UIButton';
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
    <form onSubmit={handleAuthentication} 
   className='bg-slate-100 rounded shadow max-w-xs mx-auto mt-5' >
      <h2 className='bg-slate-500 text-white px-3 py-4 text-center rounded-t'>{title}</h2>
      {error && <div className='text-red-700 bg-red-200 text-center text-xs border-b-2 border-red-700'>{error}</div>}
      <div className='p-5'>

     {/* <div className='text-red-500 p-2 m-2'>{isLoginFailed && 'Invalid Login'}</div> */}
     {/* <div className='text-red-500 p-2 m-2'>{noUserLogin && 'User not founnd'}</div>  */}

      <UITextField 
      type='email'
       placeholder='Email' 
       value={email}
       onChange={e => setemail(e.target.value)}
       />
     
      <UITextField
       type='password' 
       placeholder='Password'
       value={password}
       onChange={e => setpassword(e.target.value)}
        />
    
     <UIButton>{title}</UIButton>
    </div>
    </form>
  )
}

export default AuthenticationView;



/*
  vaka object lo inko object ni include chaiyali anty

  var obj = {a:1, b:2}
  var secondobj = {c:3,d:4,a:obj.a,b:obj.b}

  secondobj

  output--> {c:3, d:4, a:1, b:2}

*/


/*
  inko laga ela rayali anty

  var obj = {a:1, b:2}
  var secondobj = {c:3,d:4, ...obj}

   secondobj

  output--> {c:3, d:4, a:1, b:2}

*/