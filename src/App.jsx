import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App