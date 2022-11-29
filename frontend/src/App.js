import React, {useState} from "react";

import { LogInfo } from './constants/constant_vals';
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AllProducts from "./components/product/productDeatils";
import ProductsByBrands from "./components/product/productsByBrands";
import ProductDeatils from "./components/product/productDeatils";
import SellingProducts from "./components/product/sellingProducts";
import AddProducts from "./components/product/addProducts";
import AdminAllProducts from "./components/product/adminAllProducts";
import AdminAllUsers from "./components/profile/adminAllUsers";
import Cart from "./components/cart/cart";
import Orders from "./components/orders/orderInfo";
import CustomerProfile from "./components/profile/customerProfile";
import SellerProfile from "./components/profile/sellerProfile";
import AdminProfile from "./components/profile/adminProfile";
import SignUp from "./components/login/login";
import Login from "./components/login/login";
import Footer from "./components/footer/footer";

function App() {
  if(LogInfo){
    console.info(`rendering App.js`)
  }


  return (
    
    
    <div>
        <div>
        <Navbar/>

        </div>
        
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<AllProducts/>}></Route>
        <Route path='/products/brand' element={<ProductsByBrands/>}></Route>
        <Route path='/products/details' element={<ProductDeatils/>}></Route>
        <Route path='/products/details' element={<ProductDeatils/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/customerProfile' element={<CustomerProfile/>}></Route>
        <Route path='/sellerProfile' element={<SellerProfile/>}></Route>
        <Route path='/adminProfie' element={<AdminProfile/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sellingProducts' element={<SellingProducts/>}></Route>
        <Route path='/addProducts' element={<AddProducts/>}></Route>
        <Route path='/adminAllProducts' element={<AdminAllProducts/>}></Route>
        <Route path='/adminAllUsers' element={<AdminAllUsers/>}></Route>



      </Routes>

        <div>
        <Footer/>
        </div>
    </div>
  

  );
}

export default App;
