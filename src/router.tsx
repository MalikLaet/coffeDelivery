import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}
