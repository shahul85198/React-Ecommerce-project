
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import Signup from './components/Signup'

export default function AppRouter({children}) {
    return <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/login' component = {Login} />
        <Route path='/signup' component = {Signup} />

        <Route exact path='/products' component={ProductList} />
        <Route  path='/products/:id' component={ProductDetails} />

        {/* <Route exact path='/products' render={routerProps => <ProductList {...routerProps} />}/>
        <Route  path='/products/:id'  render={routerprops => <ProductDetails {...routerprops} />} />
        */}
        </Switch>
}

/*

export default function AppRouter({children, products}) {
    return <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/products' render={routerProps => <ProductList {...routerProps} products={products}/>}/>
        <Route  path='/products/:id'  render={routerprops => <ProductDetails {...routerprops} products={products} />} />
     </Switch>
*/


/*
<productslist products={products} />
ila chesty invoke chesinattu

productslist
ila chesty component ki reference ni pass chesi natu

*/