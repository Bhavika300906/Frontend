import { useState } from 'react'
import Header from './Website/Comman/Header'
import Footer from './Website/Comman/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Product from './Website/Pages/Product'
import DashBoard from './Admin/Apages/DashBoard'
import Blog from './Website/Pages/Blog'
import Features from './Website/Pages/Features'
import Testimonial from './Website/Pages/Testimonial'
import Error404 from './Website/Pages/Error404'
import Contact from './Website/Pages/Contact'
import ManageProduct from './Admin/Apages/Products/ManageProduct'
import AddProducts from './Admin/Apages/Products/AddProducts'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/feature' element={<Features />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/*' element={<Error404 />} />
          <Route path='/contact' element={<Contact />} />

          {/* ADMIN PAGES */}
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/mng-product' element={<ManageProduct />} />
          <Route path='/add-product' element={<AddProducts />} />


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
