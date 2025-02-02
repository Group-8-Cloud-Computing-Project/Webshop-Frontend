import React from 'react';
import { Button, Table, Image } from "react-bootstrap";


const Cart = ({ cartItems, setCart, onCheckout, className }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleIncreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };


    return (
        <>
            {cartItems?.length > 0 ? (
                <>
                    <Table className={className} responsive bordered>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => handleDecreaseQuantity(item.id)}
                                        >
                                            -
                                        </Button>
                                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                        >
                                            +
                                        </Button>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {onCheckout &&
                        <div className="d-flex justify-content-between">
                            <h5>Total: ${calculateTotal()}</h5>
                            <Button variant="success" onClick={onCheckout}>Checkout</Button>
                        </div>
                    }
                </>
            ) : (
                <h5>Your cart is empty.</h5>
            )}
        </>
    );
};

export default Cart;