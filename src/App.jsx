import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

const CartPage = lazy(() => import('./pages/CartPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
      </Routes>
    </>
  )
}

export default App