import { React } from "react";
import { Container, Button, Image } from "react-bootstrap";

const OrderSuccesfulMessage = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="text-center">
                <i className="text-success mb-4" style={{ fontSize: '4rem' }}></i>
                <Image src={process.env.PUBLIC_URL + '/images/success.png'} alt="Order Successful" style={{padding: '10px'}} width="100" height="100" />
                <h2>Order Successful!</h2>
                <p>Thank you for your order. Please check your email for further information.</p>
                <Button href="/" variant="primary" className="mt-3">
                    Back to Home
                </Button>
            </div>
        </Container>
    );
};

export default OrderSuccesfulMessage;