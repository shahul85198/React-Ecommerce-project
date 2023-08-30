import React, {createContext, useContext, useState} from 'react'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {firebaseapp} from "../firebaseapp"

const FIREBASE_AUTH_ERRORS = {
    'auth/wrong-password': 'Invalid email/password',
    'auth/user-not-found': 'no user found for provided email',
    'auth/email-already-in-use': 'Email already register, do please login'
}

//error = {code: 'auth/wrong-password'}
//var code = 'auth/wrong-password'
//var message = FIREBASE_AUTH_ERRORS[error.code];
//message = FIREBASE_AUTH_ERRORS['auth/user-not-found'] -> 'Invalid email/password' 


const UserContext = createContext({
    user: null,
    error: null
})

function UserProvider({children}) {
   const [user, setuser] = useState(null)
   const [error, seterror] = useState(null)
   const auth = getAuth(firebaseapp)

   // doLogin('shahul@gmail.com', 123456)
   const doLogin = (email, password) => {
    clearErrors()
       signInWithEmailAndPassword(
        auth,
        email,
        password
      ) .then(res => {
        console.log(":: Do LOGIN :: SUCCESS", res)
        setuser(res.user)
      }) .catch(error => {
        var message = FIREBASE_AUTH_ERRORS[error.code]
        console.log(":: DoLOGIN :: FAILURE", error.code, message)
        seterror(message);
      })
   }

   const doSignup = (email, password) => {
    clearErrors()
    createUserWithEmailAndPassword(
        auth,
        email,
        password
      ) .then(res => {
        console.log(":: Do SIGNUP :: SUCCESS", res)
        setuser(res.user)
      }) .catch(error => {
        var message = FIREBASE_AUTH_ERRORS[error.code]
        seterror(message)
      })
   }

   const logout = () => {
        setuser(null);
   }

   // this function is used to clear the error messages after we changing the pages
   const clearErrors = () => {
    seterror(null)
   }

  return (
    <UserContext.Provider value={{
        user,
        error,
        doLogin,
        doSignup,
        logout,
        clearErrors
    }}>
            {children}
    </UserContext.Provider>
  )
}

// to use UserContext -> useContext(UserContext) -> {use,error,dologin,dosignup,logout,clearErrors}

export const useUser = () => useContext(UserContext)

export default UserProvider


/*
var names = {
    "shahul hameed" : "he is a ui deeloper",
    "bibi jan" : "she is xml developer",
    "shaida" : "he is a gold smith"
}

var codes = {
    "shahul": " shahul hameed",
    "bibi" : " bibi jan",
    "shaida" : " shaida"
}

names[codes.shahul]
// output -> he is a ui developer

*/