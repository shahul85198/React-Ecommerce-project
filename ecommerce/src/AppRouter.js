
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import AuthenticationView from './components/AuthenticationView'
import Cart from './components/Cart'
import Logout from './components/Logout'

export default function AppRouter({children}) {
    return <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/login' render={(routerprops) => <AuthenticationView {...routerprops} isLogin />} />
        <Route path='/signup' render={(routerprops) => <AuthenticationView {...routerprops}  />} />

        <Route exact path='/products' component={ProductList} />
        <Route  path='/products/:id' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
        <Route path="/logout" component={Logout} />

        {/* <Route exact path='/products' render={routerProps => <ProductList {...routerProps} />}/>
        <Route  path='/products/:id'  render={routerprops => <ProductDetails {...routerprops} />} />
        */}
        </Switch>
}

/*
  manam ela ina pass cheochu 
 <Route path='/login' render={(routerprops) => <AuthenticationView {...routerprops} isLogin={true} />} />
        <Route path='/signup' render={(routerprops) => <AuthenticationView {...routerprops} isLogin={false} />} />

        lekapoty ila ina pass cheaivachu
         <Route path='/login' render={(routerprops) => <AuthenticationView {...routerprops} isLogin />} />
        <Route path='/signup' render={(routerprops) => <AuthenticationView {...routerprops} />} />


*/


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