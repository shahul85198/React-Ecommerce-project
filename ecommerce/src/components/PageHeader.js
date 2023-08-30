import React from 'react'
// import { Link } from 'react-router-dom'
import PageLink from './PageLink'
import { useUser } from '../contexts/UserProvider'

function PageHeader() {
  const {user} = useUser()
  return (
    <header className='bg-gray-400 flex justify-between p-3'>
            <PageLink  to='/'>
             Ecommerce App
            </PageLink>

        <nav className='flex gap-3'>
     <PageLink  to='/products'>Products</PageLink>
     <PageLink to='/cart'>Cart</PageLink>
     
     {user ? <div>{user.email} <PageLink  to='/logout'>Logout</PageLink></div> : <>
     <PageLink  to='/login'>Login</PageLink>
     <PageLink  to='/signup'>Signup</PageLink>
    </>}
         </nav>
    </header>
  )
}

export default PageHeader