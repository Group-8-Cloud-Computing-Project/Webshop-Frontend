import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
     
        <hr className="border-light" />
        <p className="text-center mb-0">© {currentYear} Web Shop. All rights reserved.</p>
    
    </footer>
  );
};

export default Footer;
