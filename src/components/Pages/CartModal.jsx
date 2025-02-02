import React, { useState } from "react";
import { Modal, Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cart from "../Common/Cart";

export default function CartModal({ show, handleClose, cartItems, setCart }) {
  const navigate = useNavigate()

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cart onCheckout={() => {
          handleClose();
          navigate('/checkout');
        }} />
      </Modal.Body>
    </Modal>
  );
}
