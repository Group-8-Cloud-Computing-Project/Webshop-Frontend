import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";


const Layout = () => {

 
  return (
    <>

        <BrowserRouter>
          <Content />
        </BrowserRouter>
    
    </>
  );
};


const Content = () => {

  return (
    <>
    <Navbar />
      <div className="content">
          <Routes>
          <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" exact element={<Home />} />       
              <Route path="/product-details/:id" exact element={<ProductDetails />} />       
          </Routes>
          </div>
          <Footer />
        </>
      )}

export default Layout;