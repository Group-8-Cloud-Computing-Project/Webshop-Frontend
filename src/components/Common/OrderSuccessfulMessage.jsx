import { React } from "react";
import { Container, Button } from "react-bootstrap";

const OrderSuccesfulMessage = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="text-center">
                <i className="text-success mb-4" style={{ fontSize: '4rem' }}></i>
                <h2>Order Successful</h2>
                <p>Thank you for your order.</p>
                <Button href="/" variant="primary" className="mt-3">
                    Back to Home
                </Button>
            </div>
        </Container>
    );
};

export default OrderSuccesfulMessage;