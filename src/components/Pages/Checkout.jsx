import { React, useState } from "react";
import { Container, Row, Col, Image, Button, Card, Form, Carousel, Select } from "react-bootstrap";
import { useAppState } from "../../context/context";
import Cart from "../Common/Cart";


const Checkout = () => {
    const {
        cart
    } = useAppState();

    const [creditCardDetailsVisible, setCreditCardDetailsVisible] = useState(false);

    const handlePaymentMethodSelection = (e) => {
        if (e.target.value === 'Credit Card') {
            setCreditCardDetailsVisible(true);
        }
        else {
            setCreditCardDetailsVisible(false);
        }
    }

    if (cart.length === 0) {
        return <Container className="p-2">No items in the cart.</Container>
    }

    return (
        <Container className="p">
            <Row className="p-5">
                <Col md={8}>
                    <Container>
                        <h2>Order Summary</h2>
                        <Cart className="mt-3" cartItems={cart} />
                    </Container>
                </Col>
                <Col >
                    <h2>Customer Details</h2>
                    <Form>
                        <Form.Group className="mb-3 p-1" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 p-1" controlId="formEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-3 p-1" controlId="formBasicPhone">
                            <Form.Label>Phone #</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3 p-1" controlId="formShippingAddress">
                            <Form.Label>Shipping Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Shipping Address" />
                        </Form.Group>
                        <Form.Group className="mb-3 p-1" controlId="formPayment</Form.Group>">
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Select onChange={handlePaymentMethodSelection} size="lg">
                                <option>PayPal</option>
                                <option>Credit Card</option>
                            </Form.Select>
                        </Form.Group>
                        {creditCardDetailsVisible && <>
                            <Form.Group className="mb-3 p-1" controlId="formCreditCardNumber">
                                <Form.Control placeholder="Enter Credit Card Number" />
                            </Form.Group>
                            <Form.Group className="mb-3 p-1" controlId="formCreditCardExpiry">
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="MM"
                                                    min="1"
                                                    max="12"
                                                    onInput={(e) => {
                                                        if (e.target.value > 12) e.target.value = 12;
                                                        if (e.target.value < 1) e.target.value = 1;
                                                    }}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="YYYY"
                                                    min={new Date().getFullYear()}
                                                    max={new Date().getFullYear() + 10}
                                                    onInput={(e) => {
                                                        const currentYear = new Date().getFullYear();
                                                        if (e.target.value < currentYear) e.target.value = currentYear;
                                                        if (e.target.value > currentYear + 10) e.target.value = currentYear + 10;
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter CVV"
                                            maxLength={4}
                                            minLength={3}
                                            onInput={(e) => {
                                                e.target.value = e.target.value.slice(0, 4);
                                                if (e.target.value.length < 3) {
                                                    e.target.setCustomValidity('CVV must be 3 or 4 digits');
                                                } else {
                                                    e.target.setCustomValidity('');
                                                }
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </>}
                        <Row className="m-2">
                            <Button size="lg">Checkout</Button>
                        </Row>
                    </Form>

                </Col>

            </Row>


        </Container>);
};

export default Checkout;