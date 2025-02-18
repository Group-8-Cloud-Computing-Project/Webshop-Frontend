import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: '1 1 auto' }}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/product-details/:id" exact element={<ProductDetails />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;