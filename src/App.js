import React, { Component } from 'react'
import "./global.scss"

import { Route, Routes } from 'react-router-dom'
import  Home from './pages/home/Home'
import Products from './pages/products/Products'
import Login from './pages/login/Login'
import Details from './pages/details/Details'
import DetailsWrapper from './pages/details/DetailsWrapper'
import Categories from './pages/categories/Categories'
import Cart from './pages/cart/Cart'

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     lightMode:false
  //   }

  // }
  // toggleLightMode = () => {
  //   this.setState= !this.state.lightMode;
  // }

  render() {
    return (
      <div className={`app ` }>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/details/:id' element={<DetailsWrapper />} />
          <Route path='/cat/:categories' element={<Categories />} />
          <Route path='/cart' element={<Cart />} />



        </Routes>
      </div>
    )
  }
}


export default App