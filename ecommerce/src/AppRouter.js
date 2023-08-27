
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'

export default function AppRouter({children, products}) {
    return <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/products' render={routerProps => <ProductList {...routerProps} products={products}/>}/>
        <Route  path='/products/:id' component={ProductDetails} />
     </Switch>
}



/*
<productslist products={products} />
ila chesty invoke chesinattu

productslist
ila chesty component ki reference ni pass chesi natu

*/