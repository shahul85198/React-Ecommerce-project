import React from 'react'

function UITextField(props) {
  return (
    <input 
     className='border-solid 
     border-2 border-gray-600 mb-3 
     py-1 px-2 rounded w-full block
     hover:shadow-xl focus:shadow-xl' 
     {...props}
     />
   
  )
}

export default UITextField

//<input {...props}/> ==> input({classname:"text-white"}) 
//<input classname="" type="email" placeholder="email" valuw=""


//<UITextField /> ==> <input className='border-solid border-2 border-gray-600 m-3' {...props}/>
//<UITextField type="email/> ==> <input className='border-solid border-2 border-gray-600 m-3' type="email/>
//<UITextField type="email placeholder="enter email" onchange={() => {}}/>
