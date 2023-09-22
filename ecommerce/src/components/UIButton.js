import React from 'react'

function UIButton(props) {
  return (
    <button 
    
    className='w-full block bg-slate-500 
     text-white px-4 py-1 rounded hover:bg-slate-700 disabled:bg-slate-100'
    {...props}>{props.children}</button>
  )
}

// <UIButton>title</UIButton>

export default UIButton