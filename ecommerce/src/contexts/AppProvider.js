/*
to avoide prop drilling we use context

*/

import React, {createContext, useContext, useEffect, useState} from 'react'
import { API_ENDPOINTS } from '../Constants'

const AppContext = createContext({
    products: [],
    loading: true
})

function AppProvider({children}) {
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() =>{
      fetch(API_ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log(":: Api endpoints.products ::", res)
       setproducts(res.products)
      })
  }, [])

  return (
    
    <AppContext.Provider value={({
      products,
      loading,
      setloading
    })}>

      {children}

    </AppContext.Provider>
  )
}

 export const useappcontext = () => useContext(AppContext)

export default AppProvider


/*
  const {products, loading, seetloading} = usseContext()
  ikada ila detructuring jarugutundi 
  usecontext lo e vaaluues untai 
*/