import React from 'react'
// import { Link } from 'react-router-dom'
import PageLink from './PageLink'
import { useUser } from '../contexts/UserProvider'
import { useappcontext } from '../contexts/AppProvider'

function PageHeader() {
  const {user} = useUser()
  const {cartCount} = useappcontext();
  return (
    <header className='bg-gray-400 flex justify-between p-3'>
            <PageLink  to='/'>
             Ecommerce App
            </PageLink>

        <nav className='flex gap-3'>
     <PageLink  to='/products'>Products</PageLink>
     {/*<PageLink to='/cart'>Cart</PageLink>*/}
     
     {user ? <>
     <div>{user.email} <PageLink  to='/logout'>Logout</PageLink></div> 
      <PageLink to="/history">Orders</PageLink>
     </> : <>
     -
     <PageLink  to='/login'>Login</PageLink>
     <PageLink  to='/signup'>Signup</PageLink>
    </>}

        <PageLink to='/cart'>Cart Item: {cartCount}</PageLink>

         </nav>
    </header>
  )
}

export default PageHeader