import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { NotFound } from './components/NotFound';
import { ProductIndex } from './components/ProductIndex';
import {About} from './components/About'
import { ContactUs } from './components/ContactUs';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}>
          <Route path='/' element={<ProductIndex></ProductIndex>}></Route>
          <Route path='/:productID' element={<ProductDetails></ProductDetails>}></Route>
        </Route>
        <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
