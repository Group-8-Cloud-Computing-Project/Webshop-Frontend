import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Pages/Home";


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
          <Routes>
          <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" exact element={<Home />} />       
          </Routes>
    <Footer />
        </>
      )}

export default Layout;