import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Reg from './pages/Reg'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')


  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/registration' element={<Reg/>} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App