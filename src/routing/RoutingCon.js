import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Products from '../components/Products'

import Product from '../components/Product'
import Carditems from '../components/Carditems'



const RoutingCon = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='Home' element={<Home />}></Route>
        <Route path='Products' element={<Products />}></Route>
        <Route path='Product/:id' element={<Product />}></Route>
        <Route path='Carditems' element={<Carditems />}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default RoutingCon