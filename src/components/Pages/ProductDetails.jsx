import { React, useState } from "react";
import { useAppState } from "../../context/context";
import { Container, Row, Col, Image, Button, Card, Form, Carousel } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const { addToCart } = useAppState();

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const { name, category, additionalImages, price, description, available_quantity } = product;

  console.log(product);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > available_quantity) {
      setError(`Maximum available quantity is ${available_quantity}`);
      setQuantity(available_quantity);
    } else if (value < 1) {
      setError("Minimum quantity is 1");
      setQuantity(1);
    } else {
      setError("");
      setQuantity(value);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {additionalImages && additionalImages.length > 0 ? <Carousel>
            {additionalImages.map((image, index) => {
              return <Carousel.Item key={index}>
                <Image src={image} alt={name} fluid />
              </Carousel.Item>
            })}
          </Carousel> : <Image src={product.image} alt={name} fluid />}

        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">€{price}</Card.Subtitle>
              <Card.Text>
                <Row className="p-2">
                  {description}
                </Row>
                {available_quantity > 0 && (
                  <Row>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control type="number" value={quantity} onChange={handleQuantityChange} min="1" max={available_quantity} placeholder="Enter Quantity" />
                      {error &&
                        <Form.Text className="text-danger">{error}</Form.Text>}
                    </Form.Group>
                  </Row>
                )}
              </Card.Text>
              <Card.Footer>
                <Row>
                  <small className="text-muted">In Stock: {available_quantity}</small>
                </Row>
                <Row>
                  <small className="text-muted">Category: {category}</small>
                </Row>
                <Row className="mt-3">
                  {available_quantity > 0 ? (
                    <Button className="p-3" size="lg" onClick={() => addToCart(product, quantity)}>Add to Cart</Button>
                  ) : (
                    <Button className="p-3" size="lg" variant="secondary" disabled>Product not in stock</Button>
                  )}
                </Row>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
